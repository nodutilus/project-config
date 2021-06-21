const { execSync } = require('child_process')

console.log('npm install')
execSync('npm install', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
