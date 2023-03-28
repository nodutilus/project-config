import { execSync } from 'child_process'

console.log('npx eslint . --max-warnings 0')
execSync('npx eslint . --max-warnings 0', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
