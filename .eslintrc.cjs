module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: {
    JSX: 'readonly'
  },
  plugins: ['unused-imports'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],

  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {}
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
    'unused-imports/no-unused-imports': 'error',
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
