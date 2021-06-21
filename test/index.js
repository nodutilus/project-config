import { execSync } from 'child_process'

execSync('node ../../../cli c8', {
  cwd: './test/c8/sctpkg',
  encoding: 'utf-8',
  stdio: ['ignore', 'ignore', 'ignore']
})

import('./eslint/index.js')
import('./c8/index.js')

execSync('node cli', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

try {
  execSync('node cli error', {
    stdio: ['ignore', 'ignore', 'ignore']
  })
} catch (error) { }

execSync('node cli eslint', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

execSync('node cli eslintcc', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})

execSync('node cli ts-check', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})


if (!process.env.RUN_IN_TEST) {
  process.env.RUN_IN_TEST = 'TRUE'
  try {
    console.log('node cli c8')
    execSync('node cli c8', {
      stdio: ['ignore', 'ignore', 'ignore']
    })
  } catch (error) { }
}
