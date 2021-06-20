module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    },
}
