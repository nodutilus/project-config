const { execSync } = require('child_process')
const { join } = require('path')

execSync(`node ${join(__dirname, '../../bin/c8')}`, {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})


// const { execSync } = require('child_process')
// const { readFileSync } = require('fs')
// const core = require('@actions/core')

// const scripts = JSON.parse(readFileSync('./package.json', 'utf-8')).scripts || {}
// let command

// if ('pre-test' in scripts) {
//   command = 'npm run pre-test'
//   core.info(command)
//   execSync(command, {
//     encoding: 'utf-8',
//     stdio: ['inherit', 'inherit', 'inherit']
//   })
// }

// command = 'npx c8 --check-coverage '
// command += 'test' in scripts ? 'npm run test' : 'node test'
// core.info(command)
// execSync(command, {
//   encoding: 'utf-8',
//   stdio: ['inherit', 'inherit', 'inherit']
// })

// if ('post-test' in scripts) {
//   command = 'npm run post-test'
//   core.info(command)
//   execSync(command, {
//     encoding: 'utf-8',
//     stdio: ['inherit', 'inherit', 'inherit']
//   })
// }
