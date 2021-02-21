const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  let version = core.getInput('node-version')

  if (version) {
    core.info(`manually input node-version: ${version}`)
  } else {
    const octokit = github.getOctokit(core.getInput('token'))

    const result = (await octokit.graphql(`
      {
        repository(owner: "nodejs", name: "node") {
          releases(first: 30, orderBy: {  field: CREATED_AT, direction: DESC }) {
            edges {
              node {
                tagName
              }
            }
          }
        }
      }
    `)).repository.releases;

    core.info(JSON.stringify(result))

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
