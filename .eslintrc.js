module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'off', // inline style 허용
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
