const { execSync } = require('child_process')
const { readFileSync } = require('fs')
const core = require('@actions/core')

const scripts = JSON.parse(readFileSync('./package.json', 'utf-8')).scripts || {}

if ('pre-test' in scripts) {
  core.info('npm run pre-test')
  execSync('npm run pre-test', {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}

core.info('npm run test')
execSync('npm run test', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

if ('post-test' in scripts) {
  core.info('npm run post-test')
  execSync('npm run post-test', {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}
