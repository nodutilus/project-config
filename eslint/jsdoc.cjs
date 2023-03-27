module.exports = {
  plugins: ['jsdoc'],
  extends: 'plugin:jsdoc/recommended',
  rules: {
    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-property-description': 0
  },
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  }
}
