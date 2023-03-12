module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    globals: {
        __IS_DEV__: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'array-callback-return': 'off',
        'consistent-return': 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'react/jsx-indent': [
            'error',
            4,
        ],
        'react/button-has-type': 'off',
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'object-shorthand': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
        'no-underscore-dangle': 'off',
        'dot-notation': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        radix: 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.tsx',
                ],
            },
        ],
        'react/no-unstable-nested-components': 'off',
        'no-unsafe-optional-chaining': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'import/no-default-export': 'off',
        'no-constructor-return': 'off',
        'default-param-last': 'off',
        'import/no-cycle': 'off',
        'function-paren-newline': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'react/no-unused-class-component-methods': 'off',
        'react/require-default-props': 'off',
        'prefer-regex-literals': 'off',
        'no-use-before-define': 'off',
        'import/no-import-module-exports': 'off',
        'class-methods-use-this': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': 'off',
        'react/no-deprecated': 'off',
        'react/jsx-props-no-spreading': 'off',
        'max-len': [
            1,
            120,
            2,
            {
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            },
        ],
    },
    overrides: [
        {
            files: [
                '*.ts',
                '*.tsx',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            plugins: [
                'react',
                '@typescript-eslint',
                'react-hooks',
            ],
            rules: {
                indent: 'off',
                '@typescript-eslint/indent': [
                    'error',
                    4,
                ],
                '@typescript-eslint/no-throw-literal': 'off',
                '@typescript-eslint/default-param-last': 'off',
                'react/no-unstable-nested-components': 'off',
                'no-unsafe-optional-chaining': 'off',
                'react/jsx-no-useless-fragment': 'off',
                'import/no-default-export': 'off',
                'no-constructor-return': 'off',
                'default-param-last': 'off',
                'import/no-cycle': 'off',
                'function-paren-newline': 'off',
                'react/jsx-no-constructed-context-values': 'off',
                'react/no-unused-class-component-methods': 'off',
                'react/require-default-props': 'off',
                'prefer-regex-literals': 'off',
                'no-use-before-define': 'off',
                'import/no-import-module-exports': 'off',
                'class-methods-use-this': 'off',
                'import/prefer-default-export': 'off',
                'import/extensions': 'off',
                'consistent-return': 'off',
                'array-callback-return': 'off',
                'no-underscore-dangle': 'off',
                'dot-notation': 'off',
                radix: 'off',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/lines-between-class-members': 'off',
                'max-len': [
                    1,
                    120,
                    2,
                    {
                        ignoreUrls: true,
                        ignoreStrings: true,
                        ignoreComments: true,
                        ignoreRegExpLiterals: true,
                        ignoreTemplateLiterals: true,
                    },
                ],
                'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
                'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
            },
        },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
