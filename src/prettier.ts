import type { Config } from 'prettier'

export const prettierConfig: Config = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss']
}
