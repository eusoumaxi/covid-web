const execSync = require('child_process').execSync;

//pm2 start --name "webNextJS" npm -- run start
console.log('init')
execSync('git pull origin main')
execSync('npm run build')
execSync('vercel --prod')
console.log('finish')