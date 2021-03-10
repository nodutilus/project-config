#!/usr/bin/env node

const modulePath = `./bin/${process.argv[2] || 'help'}.js`


import(modulePath).catch(error => {
  console.error(error)
  process.exit(1)
})
