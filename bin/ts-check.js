import { execSync } from 'child_process'

console.log('npx tsc --allowJs --checkJs --noEmit --lib ESNext --project .')
execSync('npx tsc --allowJs --checkJs --noEmit --lib ESNext --project .', {
  encoding: 'utf-8',
  stdio: ['inherit', 'inherit', 'inherit']
})
