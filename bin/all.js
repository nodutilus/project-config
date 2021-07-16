(async () => {
  await import('./eslint.js')
  await import('./eslintcc.js')
  await import('./ts-check.js')
  await import('./test.js')
  await import('./c8.js')
})().catch(error => {
  console.error(error)
  process.exit(1)
})
