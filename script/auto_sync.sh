#!/usr/bin/env bash
#
# port (Next.js) 자동 동기화·배포 스크립트
# 사용법: 프로젝트 루트에서 ./script/auto_sync.sh
#         또는: chmod +x script/auto_sync.sh && ./script/auto_sync.sh
# 필요: Node.js, npm, PM2 (npm install -g pm2)
#
# 포트: 3030 (package.json start 스크립트와 동일)
# basePath: /port — 헬스체크 URL은 필요 시 APP_HEALTH_URL 수정

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info()    { echo -e "${BLUE}[INFO]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1"; }

REPO_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GIT_ROOT="$(git -C "$REPO_PATH" rev-parse --show-toplevel 2>/dev/null || true)"
GIT_ROOT="${GIT_ROOT:-$REPO_PATH}"

BRANCH="${AUTO_SYNC_BRANCH:-master}"
REMOTE="${AUTO_SYNC_REMOTE:-origin}"
CHECK_INTERVAL="${AUTO_SYNC_INTERVAL:-30}"
LOG_FILE="$REPO_PATH/logs/auto_sync.log"
PM2_APP_NAME="${PM2_APP_NAME:-port-app}"
APP_PORT="${APP_PORT:-3030}"
APP_HEALTH_URL="${APP_HEALTH_URL:-http://127.0.0.1:${APP_PORT}/port}"

# Cloudflare 터널 이름. 쓰지 않으면 비워 두기 (빈 값이면 스킵)
CLOUDFLARED_TUNNEL="${CLOUDFLARED_TUNNEL:-}"
CLOUDFLARED_LOG="$REPO_PATH/logs/cloudflared.log"

mkdir -p "$REPO_PATH/logs"
exec > >(tee -a "$LOG_FILE") 2>&1
echo "=== port Auto Sync session $(date) ==="

stop_application() {
    log_info "Stopping PM2 app: $PM2_APP_NAME"
    cd "$REPO_PATH" || return 1
    if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
        pm2 stop "$PM2_APP_NAME" 2>/dev/null || true
        pm2 delete "$PM2_APP_NAME" 2>/dev/null || true
        log_success "PM2 app stopped"
    fi
    if command -v lsof > /dev/null 2>&1 && lsof -i ":$APP_PORT" > /dev/null 2>&1; then
        log_warning "Port $APP_PORT in use, killing listeners..."
        lsof -ti ":$APP_PORT" | xargs kill -9 2>/dev/null || true
        sleep 2
    fi
}

start_application() {
    log_info "Building and starting application..."
    cd "$REPO_PATH" || return 1

    stop_application

    log_info "Running: npm run build"
    if ! npm run build; then
        log_error "Build failed!"
        return 1
    fi
    log_success "Build completed"

    if [ -f "$REPO_PATH/ecosystem.config.js" ]; then
        log_info "Starting with ecosystem.config.js"
        pm2 start "$REPO_PATH/ecosystem.config.js"
    else
        log_info "Starting with: pm2 start npm --name $PM2_APP_NAME -- start"
        pm2 start npm --name "$PM2_APP_NAME" -- start
    fi

    sleep 3
    if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
        log_success "Application started (PM2: $PM2_APP_NAME)"
        log_info "App URL: http://localhost:${APP_PORT}/port"
    else
        log_error "Application start failed"
        return 1
    fi
}

start_cloudflared_tunnel() {
    [ -z "$CLOUDFLARED_TUNNEL" ] && return 0
    if ! command -v cloudflared > /dev/null 2>&1; then
        log_warning "cloudflared not found. Skip tunnel."
        return 0
    fi
    if pgrep -f "cloudflared.*tunnel.*run.*${CLOUDFLARED_TUNNEL}" > /dev/null 2>&1; then
        log_info "Cloudflared tunnel '$CLOUDFLARED_TUNNEL' already running"
        return 0
    fi
    log_info "Starting cloudflared tunnel: $CLOUDFLARED_TUNNEL"
    nohup cloudflared tunnel run "$CLOUDFLARED_TUNNEL" >> "$CLOUDFLARED_LOG" 2>&1 &
    sleep 2
    if pgrep -f "cloudflared.*tunnel.*run.*${CLOUDFLARED_TUNNEL}" > /dev/null 2>&1; then
        log_success "Cloudflared tunnel started (log: $CLOUDFLARED_LOG)"
    else
        log_warning "Cloudflared tunnel may have failed. Check $CLOUDFLARED_LOG"
    fi
}

sync_repository() {
    log_info "Syncing Git repository..."
    cd "$GIT_ROOT" || return 1

    if ! git fetch "$REMOTE" 2>/dev/null; then
        log_error "Git fetch failed"
        return 1
    fi

    LOCAL_COMMIT=$(git rev-parse HEAD 2>/dev/null || true)
    REMOTE_COMMIT=$(git rev-parse "$REMOTE/$BRANCH" 2>/dev/null || true)
    if [ -z "$LOCAL_COMMIT" ] || [ -z "$REMOTE_COMMIT" ]; then
        log_warning "Could not get commit refs (branch $BRANCH?)"
        return 0
    fi

    if [ "$LOCAL_COMMIT" = "$REMOTE_COMMIT" ]; then
        log_info "No changes detected"
        return 0
    fi

    log_warning "New changes detected (Local: ${LOCAL_COMMIT:0:8} -> Remote: ${REMOTE_COMMIT:0:8})"
    if ! git pull "$REMOTE" "$BRANCH"; then
        log_error "Git pull failed"
        return 1
    fi

    log_success "Code updated"
    log_info "Installing dependencies..."
    cd "$REPO_PATH" || return 1
    if ! npm ci --production=false 2>/dev/null; then
        npm install
    fi
    start_application
}

health_check() {
    cd "$REPO_PATH" || return
    if ! pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
        log_warning "PM2 app not running. Starting..."
        start_application
        return
    fi
    LINE=$(pm2 list 2>/dev/null | grep "$PM2_APP_NAME" | head -1 || true)
    if [ -z "$LINE" ] || ! echo "$LINE" | grep -q "online"; then
        log_warning "PM2 app not online. Restarting..."
        start_application
        return
    fi
    if command -v curl > /dev/null 2>&1; then
        if ! curl -sf -o /dev/null --max-time 5 "$APP_HEALTH_URL"; then
            log_warning "HTTP health check failed ($APP_HEALTH_URL). Restarting..."
            start_application
        fi
    fi
}

cleanup_logs() {
    [ ! -d "$REPO_PATH/logs" ] && return
    find "$REPO_PATH/logs" -name "*.log" -size +10M -exec gzip {} \; 2>/dev/null || true
    find "$REPO_PATH/logs" -name "*.log.gz" -mtime +7 -delete 2>/dev/null || true
    find "$REPO_PATH/logs" -name "*.log" -empty -delete 2>/dev/null || true
}

cleanup() {
    log_info "Shutting down auto_sync..."
    cd "$REPO_PATH" || exit 0
    log_success "Auto sync stopped."
    exit 0
}

trap cleanup SIGINT SIGTERM

main() {
    log_info "port Auto Sync Started"
    log_info "Repository: $REPO_PATH"
    [ -n "$GIT_ROOT" ] && [ "$GIT_ROOT" != "$REPO_PATH" ] && log_info "Git root: $GIT_ROOT"
    log_info "Branch: $BRANCH, interval: ${CHECK_INTERVAL}s, PM2: $PM2_APP_NAME, port: $APP_PORT"

    if [ ! -d "$GIT_ROOT/.git" ]; then
        log_error "Not a Git repository: $GIT_ROOT"
        exit 1
    fi

    if ! command -v pm2 > /dev/null 2>&1; then
        log_error "PM2 not found. Install: npm install -g pm2"
        exit 1
    fi

    start_application || exit 1
    start_cloudflared_tunnel

    COUNT=0
    while true; do
        sync_repository || true
        health_check || true
        COUNT=$((COUNT + 1))
        [ $((COUNT % 10)) -eq 0 ] && cleanup_logs
        sleep "$CHECK_INTERVAL"
    done
}

main "$@"
