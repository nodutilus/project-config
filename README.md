# nodutilus project config [![npm][npmbadge]][npm] [![Checks & Tests][badge]][actions]

Node.js utilities - projects shared configuration

## [![npm](https://img.shields.io/npm/dependency-version/@nodutilus/project-config/eslint-config-standard)](https://www.npmjs.com/package/eslint-config-standard) [![npm](https://img.shields.io/npm/dependency-version/@nodutilus/project-config/eslint-plugin-jsdoc)](https://www.npmjs.com/package/eslint-plugin-jsdoc)

ESLint shareable configuration for [github.com/nodutilus](https://github.com/nodutilus)

Конфиг для статического анализа модулей в формате [ESM](https://nodejs.org/api/esm.html)
при помощи утилиты [eslint](https://www.npmjs.com/package/eslint).

### Правила по умолчанию

-   [eslint:recommended](https://eslint.org/docs/rules/)
-   [StandardJS](https://www.npmjs.com/package/eslint-config-standard)
    ([+ дополнение](https://github.com/nodutilus/project-config/blob/master/node-base.cjs))
-   [JSDoc:recommended](https://www.npmjs.com/package/eslint-plugin-jsdoc)
    ([измененный](https://github.com/nodutilus/project-config/blob/master/jsdoc.cjs))

Применение правил:

-   `"extends": "@nodutilus"`, `"extends": "@nodutilus/project-config"` - Все сразу

### Пример настройки проекта

`npm i @nodutilus/project-config --save-dev`

`.eslintrc.json`:

```json
{
  "extends": "@nodutilus/project-config"
}
```

-   [nodutilus/package.json](https://github.com/nodutilus/nodutilus/blob/master/package.json)
-   [nodutilus/.eslintrc.json](https://github.com/nodutilus/nodutilus/blob/master/.eslintrc.json)

### Оценка сложности кода

Для оценки используется модуль: [eslintcc](https://www.npmjs.com/package/eslintcc).
На странице модуля есть описание
  [настроек](https://www.npmjs.com/package/eslintcc#configuration)
  и [критериев оценки](https://www.npmjs.com/package/eslintcc#complexity-ranks).

### Пример настройки проекта

-   [nodutilus/.github/workflows/checks-and-tests.yml](https://github.com/nodutilus/nodutilus/blob/master/.github/workflows/checks-and-tests.yml)

[npmbadge]: https://img.shields.io/npm/v/@nodutilus/project-config

[npm]: https://www.npmjs.com/package/@nodutilus/project-config

[badge]: https://github.com/nodutilus/project-config/actions/workflows/main.yml/badge.svg?branch=main&event=push

[actions]: https://github.com/nodutilus/project-config/actions
