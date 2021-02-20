const { execSync } = require('child_process')

execSync('npm install @actions/core@latest github:actions/setup-node#main', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

const core = require('@actions/core');

const myInput = core.getInput('node-version');

core.info('test:')
core.info(myInput)

// require('setup-node/dist/index.js')
