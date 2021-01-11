const execSync = require('child_process').execSync;

//pm2 start --name "webNextJS" npm -- run start
console.log('init')

console.log('run checkout github')
execSync('git pull origin main')
console.log('finish checkout github')

console.log('run build')
execSync('npm run build')
console.log('finih build')

console.log('upload build')
execSync('vercel --prod')
console.log('finish upload build')

console.log('finish')