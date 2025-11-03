import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactI18next from 'eslint-plugin-react-i18next';
import i18nJson from 'eslint-plugin-i18n-json';
import {defineConfig} from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: {
            js,
            'simple-import-sort': simpleImportSort,
            import: importPlugin,
            prettier: prettierPlugin,
        },
        extends: ['js/recommended'],
        settings: {
            'import/resolver': {
                alias: {
                    map: [
                        ['@/pages', './src/pages'],
                        ['@/users/*', './src/units/users/*'],
                        ['@/shared/*', './src/shared/*'],
                        ['@/typings/*', './src/typings/*'],
                        ['@/test/*', './src/__test__/*'],
                        ['@/utils/*', './src/utils/*'],
                        ['@/locales/*', './src/locales/*'],
                    ],
                    extensions: ['.ts', '.tsx', '.js', '.jsx'],
                },
            },
        },
        languageOptions: {
            globals: {...globals.browser, ...globals.node, ...globals.jest},
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-argument': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'import/no-unresolved': 'error',
            'import/named': 'error',
            'import/default': 'error',
            'import/namespace': 'error',
            'import/no-cycle': 'error',
            'import/no-absolute-path': 'error',
            'prettier/prettier': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-i18next/valid-icu-message-syntax': 'error',
            'react-i18next/no-literal-string': 'warn',
        },
    },
    {
        files: ['**/*.{jsx,tsx}'],
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'object-curly-spacing': ['warn', 'never'],
            '@typescript-eslint/object-curly-spacing': ['warn', 'never'],
        },
    },
    {
        files: ['**/webpack.config.js', '**/*.config.*', '**/scripts/**'],
        rules: {
            'no-console': 'off',
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
    {
        files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        files: ['**/locales/*.json'],
        rules: {
            'i18n-json/valid-message-syntax': 'error',
            'i18n-json/valid-json': 'error',
        },
    },
]);
