const { execSync } = require('child_process')

execSync('npm install ' +
  '@actions/core@latest ' +
  '@actions/github@latest ' +
  'github:actions/setup-node#main', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
