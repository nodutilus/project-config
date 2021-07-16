import { readFileSync } from 'fs'
import { URL } from 'url'

const pkgPath = new URL('../package.json', import.meta.url)
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

console.log(`
  Command Line Interface
  ${pkg.description}

  Все команды: all, c8, eslint, eslintcc, help, test, ts-check

  Запустить все проверки:
    $ npx nodutilus all

  ESLint - статический анализ кода:
    $ npx nodutilus eslint

  ESLintCC - оценка сложности кода:
    $ npx nodutilus eslintсс

  Type Checking (with TypeScript) - Статическая проверка типов в коде:
    $ npx nodutilus ts-check

  Tests - запуск тестов:
    $ npx nodutilus test

  c8 сode coverage - проверка покрытия кода тестами:
    $ npx nodutilus c8
`)
