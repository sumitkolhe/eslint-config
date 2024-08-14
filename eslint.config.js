// @ts-check
// import { config } from './dist/index.js'
import { importx } from 'importx'

/** @type {import('./src/index.ts')} */
const { config } = await importx('./src/index.ts', {
  parentURL: import.meta.url,
  loader: 'jiti',
})

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
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-named-imports': 'off',
      },
    },
  ],
  { vue: true },
)
