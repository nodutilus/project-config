const { execSync } = require('child_process')
const core = require('@actions/core')

core.info('Searching package.json...');

(async () => {
  const { walk, readJSON } = await import('@nodutilus/fs')

  for await (const [path] of walk('.', { include: 'package.json', exclude: '/node_modules/' })) {
    const pkg = await readJSON(path)

    core.info(`Checking '${path}'`)

    execSync(`npm info ${pkg.name}`, {
      encoding: 'utf-8',
      stdio: ['inherit', 'inherit', 'inherit']
    })
  }
})().catch(error => {
  console.error(error)
  process.exit(1)
})
