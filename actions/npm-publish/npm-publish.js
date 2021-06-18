import { dirname } from 'path'
import { execSync } from 'child_process'
import { walk, readJSON } from '@nodutilus/fs'

console.log('Searching package.json...');

(async () => {
  for await (const [path] of walk('.', { include: 'package.json', exclude: '/node_modules/' })) {
    /** @type {{name?: string, version?: string}} */
    const pkg = await readJSON(path)
    let curVersion

    console.log(`Checking '${path}'`)

    if (!pkg.name || !pkg.version) {
      console.log(' * name or version missing in package.json')
      continue
    }

    try {
      curVersion = execSync(`npm info ${pkg.name} version`, {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'pipe']
      }).trim()
    } catch (error) {
      if (!(/npm ERR! code E404/).test(error.stderr)) {
        throw error
      } else {
        console.log(` * package ${pkg.name} is not published`)
        continue
      }
    }

    if (pkg.version === curVersion) {
      console.log(` * 📦  ${pkg.name}@${curVersion} - already up-to-date`)
      continue
    }

    /* eslint-disable-next-line no-template-curly-in-string */
    execSync('npm set //registry.npmjs.org/:_authToken=${NPM_TOKEN}', {
      cwd: dirname(path),
      encoding: 'utf-8',
      stdio: ['inherit', 'inherit', 'inherit']
    })
    execSync('npm publish', {
      cwd: dirname(path),
      encoding: 'utf-8',
      stdio: ['inherit', 'inherit', 'inherit']
    })
  }
})().catch(error => {
  console.error(error)
  process.exit(1)
})
