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
