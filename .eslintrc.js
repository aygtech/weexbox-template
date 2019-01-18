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
    'linebreak-style': 0,// 不校验换行符
    semi: ['error', 'never'],// 不使用分号 
    'no-debugger': 0,// 不校验debugger
    'no-console': 0,// 不校验console
    'no-new': 0,// new Vue要用
    'no-underscore-dangle': 0,// 可使用下划线命名
    'prefer-promise-reject-errors': 0,// reject不强制Error
  }
}
