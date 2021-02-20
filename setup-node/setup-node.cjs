const core = require('@actions/core');

const myInput = core.getInput('node-version');

core.info('test:')
core.info(myInput)

// require('setup-node/dist/index.js')
