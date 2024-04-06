module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  globals: {
    JSX: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],

  rules: {
    'no-undef': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object'
        ],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always'
      }
    ],

    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
