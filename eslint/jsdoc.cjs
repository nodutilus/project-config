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
    }]
  },
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  }
}
