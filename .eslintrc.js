module.exports = {
  extends: ['standard', 'plugin:jest/recommended', 'prettier'],
  plugins: ['react', 'jest', 'prettier'],
  env: {
    'jest/globals': true,
    browser: true
  },
  globals: { gapi: true },
  rules: {
    'no-debugger': [0, {'properties': 'always'}],
    'react/jsx-uses-vars': 2,
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}
