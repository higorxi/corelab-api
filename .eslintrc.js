module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    // Adicione regras específicas do seu projeto, se necessário
  },
}
