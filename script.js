const execSync = require('child_process').execSync;

//pm2 start --name "webNextJS" npm -- run start
console.log('init')
console.log('run checkout github')
execSync('git pull origin main')
console.log('finish checkout github')
console.log('create')
execSync('touch build.js')
console.log('upload build')
execSync('vercel --prod')
console.log('finish upload build')
console.log('delete build')
execSync('rm build.js')
console.log('finish')