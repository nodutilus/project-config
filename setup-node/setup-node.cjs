const { execSync } = require('child_process')

execSync('npm install @actions/core@latest github:actions/setup-node#main', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

const core = require('@actions/core');

core.info(`'node-version: ${core.getInput('node-version')}`)
core.info('run setup-node/dist/index.js:')
require('setup-node/dist/index.js')
