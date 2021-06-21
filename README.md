# nodutilus project config [![][npmbadge]][npm] [![][badge]][actions]

Node.js utilities - projects shared configuration

Установка:

`npm i @nodutilus/project-config --save-dev`

## ESLint config [![][badge_eslint]][npm_eslint] [![][badge_standard]][npm_standard] [![][badge_jsdoc]][npm_jsdoc]

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

    $ npx nodutilus eslintсс

#### GitHub Actions

```yml
name: Checks
jobs:
  checks:
    steps:
      - uses: nodutilus/project-config/actions/eslintсс@main
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

## c8 - code-coverage [![][badge_c8]][npm_c8]

Покрытие кода с использованием встроенных функций Node.js.
Для настройки используется конфигурация [nyc][npm_nyc]

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

## Пример настройки проекта

-   [nodutilus/.github/workflows/checks-and-tests.yml](https://github.com/nodutilus/nodutilus/blob/master/.github/workflows/checks-and-tests.yml)

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
