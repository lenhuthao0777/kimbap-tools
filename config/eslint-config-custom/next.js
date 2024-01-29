const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['only-warn'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/display-name': 'off',
    'no-return-assign': 'off',
    'react/jsx-no-bind': 'off',
  },
};
