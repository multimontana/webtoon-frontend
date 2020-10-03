module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    '@vue/standard',
    'plugin:vue/essential',
    '@vue/airbnb'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [2, 280, 4, {'ignoreUrls': true}],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }]
  },
}
