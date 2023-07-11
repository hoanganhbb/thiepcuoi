module.exports = {
  apps: [
    {
      script: 'server.js',
      watch: '.',
      autorestart: true,
      env_production: {
        // khi deploy với option --env production
        NODE_ENV: 'production',
        PORT: 8888,
      },
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '103.107.182.188',
      ref: 'origin/main',
      repo: 'https://github.com/hoanganhbb/thiepcuoi.git',
      path: '/var/www/html/thiepcuoi',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
