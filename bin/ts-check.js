import { execSync } from 'child_process'

console.log('npx tsc --allowJs --checkJs --noEmit --project .')
execSync('npx tsc --allowJs --checkJs --noEmit --project .', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
