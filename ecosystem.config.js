module.exports = {
    apps: [
      {
        name: 'CRONweb',
        script: 'script.js',
        instances: 1,
        exec_mode: 'fork',
        cron_restart: '*/120 * * * *',
        watch: true,
        autorestart: false,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
e