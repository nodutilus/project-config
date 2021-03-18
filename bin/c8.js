import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const scripts = JSON.parse(readFileSync('./package.json', 'utf-8')).scripts || {}
let command, error

if ('pre-test' in scripts) {
  command = 'npm run pre-test'
  console.log(command)
  execSync(command, {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}

command = 'npx c8 --check-coverage '
command += 'test' in scripts ? 'npm run test' : 'node test'
console.log(command)
try {
  execSync(command, {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
} catch (err) {
  error = err
}

if ('post-test' in scripts) {
  command = 'npm run post-test'
  console.log(command)
  execSync(command, {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}

if (error) {
  throw error
}
