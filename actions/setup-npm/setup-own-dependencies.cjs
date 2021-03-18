const { execSync } = require('child_process')

execSync('npm install', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
