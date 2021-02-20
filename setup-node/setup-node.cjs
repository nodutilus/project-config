const core = require('@actions/core');

const myInput = core.getInput('node-version');

console.log(myInput)

// require('setup-node/dist/index.js')
