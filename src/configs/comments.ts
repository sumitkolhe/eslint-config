import { configComments } from '../plugins'
import type { Linter } from 'eslint'

export const comments: Linter.Config[] = [
  {
    ...configComments.recommended,
    name: 'config/comments/recommended',
  },
  {
    name: 'config/comments',
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
    },
  },
]
