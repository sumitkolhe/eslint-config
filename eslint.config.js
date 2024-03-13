import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { kolhe } = require('./src/index.ts')

export default kolhe(
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
