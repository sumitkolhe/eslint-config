# @kolhe/eslint-config [![npm](https://img.shields.io/npm/v/@kolhe/eslint-config.svg)](https://npmjs.com/package/@kolhe/eslint-config)

One Eslint Config to rule them all. Supports JavaScript, TypeScript, Vue 3, Prettier and much more out of the box.

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Ignores common files like `dist`, `node_modules`, `coverage`, and files in `.gitignore`.
- Reasonable defaults, best practices, only one-line of config
- Reasonable strict, but with better code quality.

## Install

```bash
yarn add -D @kolhe/eslint-config
```

Require Node.js >= 18.18, and ESLint >= 9.5.0.

## Usage

```js
import { config } from '@kolhe/eslint-config'
export default config(
  // Features: it'll detect installed dependency and enable necessary features automatically
  {
    prettier: true,
    markdown: true,
    vue: true, // auto detection
    unocss: false // auto detection
  },
  [
    /* your custom config */
  ]
).removeRules('foo/bar') // see more in https://github.com/antfu/eslint-flat-config-utils
```

### Presets

```js
// eslint.config.js
import {
  presetJavaScript, // Ignore common files and include javascript support
  presetJsonc, // Includes basic json(c) file support and sorting json keys
  presetLangsExtensions, // Includes markdown, yaml + `presetJsonc` support
  presetBasic, // Includes `presetJavaScript` and typescript support

  // Includes
  // - `presetBasic` (JS+TS) support
  // - `presetLangsExtensions` (markdown, yaml, jsonc) support
  // - Vue support
  // - UnoCSS support (`uno.config.ts` is required)
  // - Prettier support
  presetAll
} from '@kolhe/eslint-config'

export default presetAll
```

See [preset.ts](./src/presets.ts) for more details.

## License

[MIT](./LICENSE) License © 2022-PRESENT [Sumit Kolhe](https://github.com/kolhe)
