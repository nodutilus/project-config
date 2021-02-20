const { execSync } = require('child_process')

execSync('npm install', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
