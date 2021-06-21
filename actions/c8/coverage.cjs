const { execSync } = require('child_process')
const { join } = require('path')

execSync(`node ${join(__dirname, '../../bin/c8')}`, {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
