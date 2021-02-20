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
    }).data.tag_name

    core.info(`resolved latest node-version: ${version}`)
    process.env['INPUT_NODE-VERSION'] = version
  }

  core.info('run actions/setup-node#main')
  require('setup-node/dist/index.js')
}

run()
