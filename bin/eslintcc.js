import { execSync } from 'child_process'

console.log('npx eslintcc . --greater-than C --show-rules')
execSync('npx eslintcc . --greater-than C --show-rules', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
