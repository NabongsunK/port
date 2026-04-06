This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started (Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3030/port](http://localhost:3030/port) with your browser to see the result when you run with `next dev -p 3030` and `basePath: "/port"`.

---

## Production with PM2 (3030 포트, /port basePath)

### 1. 빌드

```bash
npm install
npm run build
```

### 2. PM2로 앱 실행

```bash
# 이름은 원하는 대로 변경 가능 (예: port-app)
pm2 start npm --name "port-app" -- start
```

위 명령은 `package.json`의 `"start": "next start -p 3030"` 스크립트를 사용해서
Next.js 프로덕션 서버를 3030 포트로 실행합니다.

### 3. PM2 상태 확인 / 재시작 / 중지

```bash
# 상태 확인
pm2 ls

# 재시작
pm2 restart port-app

# 중지
pm2 stop port-app

# 삭제
pm2 delete port-app
```

### 4. 서버 재부팅 시 자동 시작 설정

```bash
pm2 startup
pm2 save
```

이렇게 설정하면 서버가 재부팅되어도 `port-app` 프로세스가 자동으로 다시 올라옵니다.

---

## 자동 동기화·배포 (`script/auto_sync.sh`)

WWE 프로젝트와 비슷하게, **Git 원격 변경을 주기적으로 당겨오고** `npm run build` 후 **PM2로 다시 띄우는** 루프 스크립트입니다. **Linux/macOS** 서버에서 사용하는 것을 전제로 합니다.

### 준비

```bash
npm install -g pm2
chmod +x script/auto_sync.sh
```

### 실행 (포그라운드)

프로젝트 루트에서:

```bash
./script/auto_sync.sh
```

로그는 `logs/auto_sync.log`에 **추가(append)** 되며, 터미널에도 같이 출력됩니다.

### 백그라운드 예시

```bash
nohup ./script/auto_sync.sh > /dev/null 2>&1 &
```

### 환경 변수 (선택)

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `AUTO_SYNC_BRANCH` | `master` | 추적할 브랜치 |
| `AUTO_SYNC_REMOTE` | `origin` | 원격 이름 |
| `AUTO_SYNC_INTERVAL` | `30` | `git fetch`/헬스체크 주기(초) |
| `PM2_APP_NAME` | `port-app` | PM2 프로세스 이름 |
| `APP_PORT` | `3030` | 포트 (lsof 정리용) |
| `APP_HEALTH_URL` | `http://127.0.0.1:3030/port` | `curl` 헬스체크 URL |
| `CLOUDFLARED_TUNNEL` | (비움) | 쓰려면 터널 이름 설정, 비우면 터널 안 띄움 |

Cloudflare 터널을 쓰는 경우:

```bash
export CLOUDFLARED_TUNNEL="내터널이름"
./script/auto_sync.sh
```

`ecosystem.config.js`가 있으면 스크립트가 `pm2 start ecosystem.config.js`로 기동합니다 (이 레포에 포함됨).
