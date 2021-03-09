module.exports = {
  extends: ['eslint:recommended', 'standard'],
  rules: {
    'camelcase': 'warn', //                        https://eslint.org/docs/rules/camelcase
    'quote-props': ['warn', //                     https://eslint.org/docs/rules/quote-props
      'consistent-as-needed'
    ],
    'space-before-function-paren': ['warn', //     https://eslint.org/docs/rules/space-before-function-paren
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'switch-colon-spacing': 'warn', //             https://eslint.org/docs/rules/switch-colon-spacing
    'no-multiple-empty-lines': ['warn', //         https://eslint.org/docs/rules/no-multiple-empty-lines
      { max: 2, maxEOF: 0, maxBOF: 0 }
    ],
    'padded-blocks': ['warn', //                   https://eslint.org/docs/rules/padded-blocks
      {
        blocks: 'never',
        classes: 'always',
        switches: 'never'
      },
      { allowSingleLineBlocks: true }
    ],
    'object-shorthand': 'error', //                https://eslint.org/docs/rules/object-shorthand
    'prefer-destructuring': 'error', //            https://eslint.org/docs/rules/prefer-destructuring
    'no-var': 'error', //                          https://eslint.org/docs/rules/no-var
    'require-await': 'error', //                   https://eslint.org/docs/rules/require-await
    'wrap-regex': 'error', //                      https://eslint.org/docs/rules/wrap-regex

    // await: https://github.com/eslint/eslint/pull/12663
    'padding-line-between-statements': ['warn', // https://eslint.org/docs/rules/padding-line-between-statements
      { blankLine: 'always', prev: '*', next: ['class', 'function'] },
      { blankLine: 'always', prev: ['class', 'function'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['import', 'cjs-import', 'export', 'cjs-export'] },
      { blankLine: 'always', prev: ['import', 'cjs-import', 'export', 'cjs-export'], next: '*' },
      { blankLine: 'always', prev: ['directive', 'const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'never', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: 'const', next: 'cjs-import' },
      { blankLine: 'always', prev: 'cjs-import', next: 'const' },
      { blankLine: 'never', prev: ['import', 'cjs-import'], next: ['import', 'cjs-import'] },
      { blankLine: 'never', prev: ['export', 'cjs-export'], next: ['export', 'cjs-export'] }
    ]
  }
}
