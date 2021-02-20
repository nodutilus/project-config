const { execSync } = require('child_process')

execSync('npm install ' +
  '@actions/core@latest ' +
  '@actions/github@latest ', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
