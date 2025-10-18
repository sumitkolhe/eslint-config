import { eslintConfig } from './src/index'

export default eslintConfig({ vue: true }).append([
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error'
    }
  },
  {
    files: ['**/*.md/*'],
    rules: {
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off'
    }
  },
  {
    ignores: ['src/typegen.ts']
  }
])
