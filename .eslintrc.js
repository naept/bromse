module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        endOfLine: "auto",
        trailingComma: "all",
        tabWidth: 2,
        singleQuote: true
      }
    ],
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "require-await": [
      "warn"
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "vue",
    "prettier",
  ],
}