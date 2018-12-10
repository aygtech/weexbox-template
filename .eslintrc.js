module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    Vue: false,
    weex: false,
    window: false
  },
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['html'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    camelcase: [1, { properties: 'never' }],
    'no-debugger': 0,
    'no-console': 0,
    'no-new': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'radix': 0,
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prefer-promise-reject-errors': 0,
    'linebreak-style': ["off", "windows"]
  }
}
