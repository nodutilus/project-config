const { execSync } = require('child_process')
const { join } = require('path')
const core = require('@actions/core')

execSync(`node ${join(__dirname, 'npm-publish')}`, {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit'],
  env: Object.assign({}, process.env, {
    NPM_TOKEN: core.getInput('token', { required: true })
  })
})
