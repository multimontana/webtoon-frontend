module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  'extends': [
    '@vue/standard',
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
}
