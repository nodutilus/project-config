const { execSync } = require('child_process')
const { readFileSync } = require('fs')

const scripts = JSON.parse(readFileSync('./package.json', 'utf-8')).scripts || {}
let command

console.log('npm install')
execSync('npm install', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

if ('build' in scripts) {
  command = 'npm run build'
  console.log(command)
  execSync(command, {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}
