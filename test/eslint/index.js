/** @module @test/test */

import { TestClassProperties } from './class-properties.js'
import { testDynamicImport } from './dynamic-import.js'

/**
 * @typedef {object} test
 * @property {import('fs').Dirent} test test
 */

// Приватные и публичные свойства класса
const tcp = new TestClassProperties()


console.log(tcp)
console.log('test - ok')

// Динамичский импорт
testDynamicImport()
