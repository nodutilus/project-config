const { execSync } = require('child_process')
const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  let version = core.getInput('node-version')

  if (version) {
    core.info(`manually input node-version: ${version}`)
  } else {
    const octokit = github.getOctokit(core.getInput('token'))

    version = await octokit.repos.getLatestRelease({
      owner: 'nodejs',
      repo: 'node'
    })

    core.info(`resolved latest node-version: ${JSON.stringify(version)}`)
    process.env['INPUT_NODE-VERSION'] = version
  }

  core.info('run actions/setup-node#main')
  require('setup-node/dist/index.js')

  execSync('npm install', {
    cwd: __dirname,
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}

run().catch(error => {
  console.error(error.stack || error)
  process.exit(1)
})
