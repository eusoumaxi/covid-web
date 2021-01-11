const execSync = require('child_process').execSync;

//pm2 start --name "webNextJS" npm -- run start
console.log('init')
execSync('npm run build')
execSync('pm2 stop webNextJS')
execSync('pm2 start webNextJS')
console.log('finish')