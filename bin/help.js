import { readFileSync } from 'fs'
import { URL } from 'url'

const pkgPath = new URL('../package.json', import.meta.url)
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

console.log(pkg.description)
