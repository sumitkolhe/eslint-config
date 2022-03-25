# @kolhe/eslint-config

## Usage

### Install

```bash
yarn add -D eslint @kolhe/eslint-config
```

### Config `.eslintrc`

```js
module.exports = {
  root: true,
  extends: ['@kolhe/eslint-config'],
  rules: {
    // Your custom rules
  },
};
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Config `.prettierrc`

```json
{
  "singleQuote": true,
  "semi": true,
  "arrowParens": "avoid",
  "jsxSingleQuote": true,
  "endOfLine": "lf",
  "trailingComma": "es5"
}
```

### Add script for `package.json`

For example:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ],
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ]
}
```

## License

MIT
