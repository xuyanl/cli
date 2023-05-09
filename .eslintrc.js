module.exports = {
    env: {
        commonjs: true,
        es2021: true
    },
    ignorePatterns: ['node_modules/', 'config/', 'dist'],
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json']
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/quotes': ['error', 'single']
    }
}
