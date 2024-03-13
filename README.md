# @kolhe/eslint-config [![npm](https://img.shields.io/npm/v/@kolhe/eslint-config.svg)](https://npmjs.com/package/@kolhe/eslint-config)

One Eslint Config to rule them all. Supports JavaScript, TypeScript, Vue 2, Vue 3, Prettier out of the box.

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue 2 and 3 out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Install

```bash
npm i -D @kolhe/eslint-config
```

Require Node.js >= 18.18, and ESLint >= 8.56.0.

## Usage

```js
import { kolhe } from '@kolhe/eslint-config'
export default kolhe(
  [
    /* your custom config */
  ],
  // Features: it'll detect installed dependency and enable necessary features automatically
  {
    prettier: true,
    markdown: true,
    vue: true, // auto detection
    unocss: false, // auto detection
  },
)
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
  presetAll,
} from '@kolhe/eslint-config'

export default presetAll
```

See [preset.ts](./src/presets.ts) for more details.

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true,
}
```

## License

[MIT](./LICENSE) License © 2022-PRESENT [Sumit Kolhe](https://github.com/kolhe)
