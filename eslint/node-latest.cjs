module.exports = {
  extends: ['./node.cjs'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }
}
