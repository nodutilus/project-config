import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const scripts = JSON.parse(readFileSync('./package.json', 'utf-8')).scripts || {}
let command

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
execSync(command, {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

if ('post-test' in scripts) {
  command = 'npm run post-test'
  console.log(command)
  execSync(command, {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}
