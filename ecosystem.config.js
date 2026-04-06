/** PM2 설정 — `pm2 start ecosystem.config.js` 또는 script/auto_sync.sh 가 자동 사용 */
module.exports = {
  apps: [
    {
      name: "port-app",
      cwd: __dirname,
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
