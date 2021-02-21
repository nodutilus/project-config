const core = require('@actions/core')
const github = require('@actions/github')
const semver = require('semver')

async function run() {
  let version = core.getInput('node-version')

  if (version) {
    core.info(`manually input node-version: ${version}`)
  } else {
    const octokit = github.getOctokit(core.getInput('token'))
    const releases = (await octokit.graphql(`{
      repository(owner: "nodejs", name: "node") {
        releases(first: 30, orderBy: {  field: CREATED_AT, direction: DESC }) {
          nodes { tagName }
        }
      }
    }`)).repository.releases.nodes

    version = releases.reduce((latest, item) => {
      return semver.gt(latest, item.tagName) ? latest : item.tagName
    }, '0')

    core.info(JSON.stringify(releases))
    core.info(`latest version: ${version}`)

    version = (await octokit.repos.getLatestRelease({
      owner: 'nodejs',
      repo: 'node'
    })).data.tag_name

    core.info(`resolved latest node-version: ${JSON.stringify(version)}`)
    process.env['INPUT_NODE-VERSION'] = version
  }

  core.info('run github:actions/setup-node#main')
  require('@actions/setup-node/dist/index.js')
}

run().catch(error => {
  console.error(error.stack || error)
  process.exit(1)
})
