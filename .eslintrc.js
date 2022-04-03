module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-undef": [0],
    "max-len": [2, { "ignoreComments": false }],
    "indent": [2, 2],
    "no-unused-vars": [0],
    "brace-style": [2]
  },
}
