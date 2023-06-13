/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {},
    settings: {
        react: {
            version: '^18.2.0',
        },
    },
}
