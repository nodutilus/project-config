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

### Применение

`.eslintrc.cjs`:

```js
module.exports = {
  extends: require.resolve('@nodutilus/project-config/eslint')
}
```

## ESLintCC [![][badge_eslintcc]][npm_eslintcc]

Для оценки сложности кода используется модуль: [eslintcc][npm_eslintcc].
На странице модуля есть описание
  [настроек](https://www.npmjs.com/package/eslintcc#configuration)
  и [критериев оценки](https://www.npmjs.com/package/eslintcc#complexity-ranks).

Для работы модуль использует настройки ESLint текущего проекта.

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
