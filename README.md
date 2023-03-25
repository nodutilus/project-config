# nodutilus project config [![][npmbadge]][npm] [![][badge]][actions]

Node.js utilities - projects shared configuration

Установка:

    $ npm i @nodutilus/project-config --save-dev

Справка:

    $ npx nodutilus help

Запустить все проверки:

    $ npx nodutilus all

Пример настройки GitHub Actions из [self.yml](.github/workflows/self.yml) использующий [main.yml](.github/workflows/main.yml):


```yaml
name: Checks ➜ Tests ➜ Publish

on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main

jobs:
  main:
    uses: nodutilus/project-config/.github/workflows/main.yml@main
    with:
      publish: true
      publish_branche: main
    secrets:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## ESLint [![][badge_eslint]][npm_eslint] [![][badge_standard]][npm_standard] [![][badge_jsdoc]][npm_jsdoc]

Конфиг для статического анализа модулей в формате [ESM](https://nodejs.org/api/esm.html)
при помощи утилиты [eslint][npm_eslint].

### Правила по умолчанию

-   [eslint:recommended](https://eslint.org/docs/rules/)
-   [StandardJS][npm_standard]
    ([+ дополнение](https://github.com/nodutilus/project-config/blob/master/node-base.cjs))
-   [JSDoc:recommended][npm_jsdoc]
    ([+ дополнение](https://github.com/nodutilus/project-config/blob/master/jsdoc.cjs))

### Настройки

`.eslintrc.json`:

```json
{
  "extends": "@nodutilus"
}
```

### Использование

#### Локально

    $ npx nodutilus eslint

#### GitHub Actions

```yml
name: Checks
jobs:
  checks:
    steps:
      - uses: nodutilus/project-config/actions/eslint@main
```

## ESLintCC [![][badge_eslintcc]][npm_eslintcc]

Для оценки сложности кода используется модуль: [eslintcc][npm_eslintcc].
На странице модуля есть описание
  [настроек](https://www.npmjs.com/package/eslintcc#configuration)
  и [критериев оценки](https://www.npmjs.com/package/eslintcc#complexity-ranks).

Для работы модуль использует настройки ESLint текущего проекта.

### Использование

#### Локально

    $ npx nodutilus eslintcc

#### GitHub Actions

```yml
name: Checks
jobs:
  checks:
    steps:
      - uses: nodutilus/project-config/actions/eslintcc@main
```

## Type Checking JavaScript [![][badge_ts]][npm_ts]

Проверка типов в коде написанном на JavaScript при помощи TypeScript

Подробнее о проверке типов в см. статье:
[JS Projects Utilizing TypeScript](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)

### Настройки

`tsconfig.json`:

```json
{
  "extends": "@nodutilus/project-config/tsconfig"
}
```

### Использование

#### Локально

    $ npx nodutilus ts-check

#### GitHub Actions

```yml
name: Checks
jobs:
  checks:
    steps:
      - uses: nodutilus/project-config/actions/ts-check@main
```

## Run tests

Для запуска тестов используется команда `node test` или `npm run test` (если настроен скрипт в package.json).
Так же можно настроить пред- и пост- обработчик запуска тестов скриптами `npm run pre-test` и `npm run post-test`

### Настройки

`package.json`:

```json
{
  "scripts": {
    "pre-test": "node test/pre-test",
    "test": "node test/index",
    "post-test": "node test/post-test"
  }
}
```

### Использование

#### Локально

    $ npx nodutilus test

#### GitHub Actions

```yml
name: Tests
jobs:
  tests:
    steps:
      - uses: nodutilus/project-config/actions/test@main
```

## Code coverage with c8 [![][badge_c8]][npm_c8]

Покрытие кода с использованием встроенных функций Node.js.
Для настройки используется конфигурация [nyc][npm_nyc]

Для оценки покрытия запускается сценарии аналогичные описанным в разделе [Run tests](#run-tests)
(Покрытие оценивается только для сценария запуска тестов)

### Настройки

`.nycrc.json`:

```json
{
  "extends": "@nodutilus/project-config/nyc"
}
```

### Использование

#### Локально

    $ npx nodutilus c8

#### GitHub Actions

```yml
name: Coverage
jobs:
  coverage:
    steps:
      - uses: nodutilus/project-config/actions/c8@main
```

[npmbadge]: https://img.shields.io/npm/v/@nodutilus/project-config

[npm]: https://www.npmjs.com/package/@nodutilus/project-config

[badge]: https://github.com/nodutilus/project-config/actions/workflows/main.yml/badge.svg?branch=main&event=push

[actions]: https://github.com/nodutilus/project-config/actions

[badge_eslint]: https://img.shields.io/npm/dependency-version/@nodutilus/project-config/eslint

[npm_eslint]: https://www.npmjs.com/package/eslint

[badge_standard]: https://img.shields.io/npm/dependency-version/@nodutilus/project-config/eslint-config-standard

[npm_standard]: https://www.npmjs.com/package/eslint-config-standard

[badge_jsdoc]: https://img.shields.io/npm/dependency-version/@nodutilus/project-config/eslint-plugin-jsdoc

[npm_jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc

[badge_eslintcc]: https://img.shields.io/npm/dependency-version/@nodutilus/project-config/eslintcc

[npm_eslintcc]: https://www.npmjs.com/package/eslintcc

[badge_c8]: https://img.shields.io/npm/dependency-version/@nodutilus/project-config/c8

[npm_c8]: https://www.npmjs.com/package/c8

[badge_ts]: https://img.shields.io/npm/dependency-version/@nodutilus/project-config/typescript

[npm_ts]: https://www.npmjs.com/package/typescript

[npm_nyc]: https://www.npmjs.com/package/nyc
