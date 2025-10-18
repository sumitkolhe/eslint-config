import { GLOB_JSX, GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT, GLOB_TSX } from '../globs'
import { pluginImport } from '../plugins'
import type { Config } from '../types'

export const specialCases = (): Config[] => [
  {
    files: ['**/scripts/*', '**/cli.*'],
    name: 'eslintConfig/special/cli',
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: [`**/*.{test,spec}.${GLOB_SRC_EXT}`],
    name: 'eslintConfig/special/tests',
    rules: {
      'no-unused-expressions': 'off',
      'unicorn/consistent-function-scoping': 'off'
    }
  },
  {
    files: [
      `**/*config*.${GLOB_SRC_EXT}`,
      `**/{views,pages,routes,middleware,plugins,api,modules}/${GLOB_SRC}`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack,farm,unloader}.${GLOB_SRC_EXT}`,
      '**/*.d.ts',
      `${GLOB_MARKDOWN}/**`,
      '**/.prettierrc*'
    ],
    name: 'eslintConfig/special/allow-default-export',
    plugins: {
      import: pluginImport
    },
    rules: {
      'import/no-default-export': 'off'
    }
  },
  {
    files: ['**/ISSUE_TEMPLATE/**'],
    name: 'eslintConfig/special/github',
    rules: {
      'unicorn/filename-case': 'off'
    }
  },
  {
    files: [GLOB_JSX, GLOB_TSX],
    name: 'eslintConfig/special/components',
    rules: {
      'unicorn/no-anonymous-default-export': 'off'
    }
  }
]
