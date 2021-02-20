const { execSync } = require('child_process')
const core = require('@actions/core')

core.info('npm install')
execSync('npm install', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
