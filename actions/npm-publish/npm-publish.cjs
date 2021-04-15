const { execSync } = require('child_process')
const { join } = require('path')
const core = require('@actions/core')

const token = core.getInput('token', { required: true })

if (!token) {
  throw new Error('NPM access token is not configured in secret variable `NPM_TOKEN`')
}

execSync(`node ${join(__dirname, 'npm-publish')}`, {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit'],
  env: Object.assign({}, process.env, {
    NPM_TOKEN: token
  })
})
