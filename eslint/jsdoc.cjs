module.exports = {
  plugins: ['jsdoc'],
  extends: 'plugin:jsdoc/recommended',
  rules: {
    'jsdoc/require-jsdoc': ['warn', { // https://www.npmjs.com/package/eslint-plugin-jsdoc#require-jsdoc
      require: {
        FunctionDeclaration: true,
        ClassDeclaration: true,
        MethodDefinition: true
      }
    }],
    'jsdoc/no-undefined-types': ['warn', { // https://www.npmjs.com/package/eslint-plugin-jsdoc#no-undefined-types
      definedTypes: ['Iterator']
    }]
  },
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  }
}
