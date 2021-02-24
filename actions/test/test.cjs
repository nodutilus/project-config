const { execSync } = require('child_process')
const core = require('@actions/core')

core.info('npm run pre-test')
execSync('npm run pre-test', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

core.info('npm run test')
execSync('npm run test', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

core.info('npm run post-test')
execSync('npm run post-test', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
