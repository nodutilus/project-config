const { execSync } = require('child_process')
const { get } = require('https')
const { promisify } = require('util')

const pGET = promisify(get)

execSync('npm install ' +
  '@actions/core@latest ' +
  // '@actions/github@latest ' +
  'github:actions/setup-node#main', {
  cwd: __dirname,
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

const core = require('@actions/core')
// const github = require('@actions/github')

// const octokit = github.getOctokit(github.context.token)

async function run() {
  core.info(`'node-version: ${core.getInput('node-version')}`)

  // const latestRelease = await octokit.repos.getLatestRelease({
  //   owner: 'nodejs',
  //   repo: 'node'
  // })

  const latestRelease = await pGET('https://api.github.com/repos/nodejs/node/releases/latest')

  core.info(JSON.stringify(latestRelease))

  process.env[`INPUT_${'node-version'.replace(/ /g, '_').toUpperCase()}`] = latestRelease

  core.info('run setup-node/dist/index.js:')
  require('setup-node/dist/index.js')

  execSync('node --version', {
    cwd: __dirname,
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}

run()
