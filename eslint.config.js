import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
require('sucrase/register')

/** @type {typeof import('./src/index.ts')} */
const { config } = require('./src/index.ts')

export default config(
  [
    {
      files: ['src/**/*.ts'],
      rules: {
        'perfectionist/sort-objects': 'error',
      },
    },
    {
      files: ['**/*.md/*'],
      rules: {
        'sort-imports': 'off',
      },
    },
  ],
  { vue: true },
)
