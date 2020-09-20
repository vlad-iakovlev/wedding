module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'semi': ['error', 'never'],
    'sort-imports': 'error',
  },
};
