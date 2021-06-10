const core = require('@actions/core')
const github = require('@actions/github')
const semver = require('semver')

/**
 * Проверка версии Node.JS через релизы на GitHub,
 *    с последующим запуском действия actions/setup-node с указанием версии
 */
async function run() {
  let version = core.getInput('node-version')

  if (version) {
    core.info(`manually input node-version: ${version}`)
  } else {
    const { graphql } = github.getOctokit(core.getInput('token'))
    const releases = (await graphql(`{
      repository(owner: "nodejs", name: "node") {
        releases(first: 100, orderBy: {  field: CREATED_AT, direction: DESC }) {
          nodes { tagName }
        }
      }
    }`)).repository.releases.nodes

    version = releases.reduce((latest, item) => {
      return semver.gt(latest, item.tagName) ? latest : item.tagName
    }, '0.0.0')

    core.info(`resolved latest node-version: ${JSON.stringify(version)}`)
    process.env['INPUT_NODE-VERSION'] = version
  }

  core.info('run github:actions/setup-node#main')
  // @ts-ignore
  require('@actions/setup-node/dist/index.js')
}

run().catch(error => {
  console.error(error.stack || error)
  process.exit(1)
})
