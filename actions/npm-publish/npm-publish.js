import { execSync } from 'child_process'
import { walk, readJSON } from '@nodutilus/fs'

console.log('Searching package.json...');

(async () => {
  for await (const [path] of walk('.', { include: 'package.json', exclude: '/node_modules/' })) {
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

    console.log(`curVersion: ${curVersion}`)
  }
})().catch(error => {
  console.error(error)
  process.exit(1)
})
