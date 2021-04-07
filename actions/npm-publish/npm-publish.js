import { execSync } from 'child_process'
import { walk, readJSON } from '@nodutilus/fs'

console.log('Searching package.json...');

(async () => {
  for await (const [path] of walk('.', { include: 'package.json', exclude: '/node_modules/' })) {
    const pkg = await readJSON(path)

    console.log(`Checking '${path}'`)

    execSync(`npm info ${pkg.name}`, {
      encoding: 'utf-8',
      stdio: ['inherit', 'inherit', 'inherit']
    })
  }
})().catch(error => {
  console.error(error)
  process.exit(1)
})
