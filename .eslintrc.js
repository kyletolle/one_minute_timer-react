module.exports = {
  extends: [
    'react-app',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@typescript-eslint/parser',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}
