/** Проверка работы с динамическим импортом */
export function testDynamicImport() {
  (async () => {
    const path = './class-properties.js'

    await import('./class-properties.js').then(tcp => {
      console.log('dynamic:', tcp)
    })

    await import(path).then(tcp => {
      console.log('dynamic (TMPL_STR):', tcp)
    })
  })()
}
