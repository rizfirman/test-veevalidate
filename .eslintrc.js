module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/multi-word-component-names': 'off',
  },
}
