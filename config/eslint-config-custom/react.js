const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'prettier', 'eslint-config-turbo'],
  plugins: ['only-warn', 'prettier'],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
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
  rules: {
    'react/function-component-definition': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    'react/jsx-key': 'off',
    'no-dupe-class-members': 'off',
    'prefer-arrow-callback': 'off',
    'import/export': 'off',
    'prettier/prettier': 'error',
    'react/display-name': 'error',
  },
  ignorePatterns: [
    // Ignore dotfiles
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    '**/*.css',
    '*.snap',
    'jest.config.js',
    '**/*.js',
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    {
      parser: '@typescript-eslint/parser',
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      rules: {
        'no-use-before-define': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': 'off',
        'no-void': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false },
        ],
      },
    },
  ],
};
