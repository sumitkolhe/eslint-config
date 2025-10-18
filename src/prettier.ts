import type { Config } from 'prettier'

const config: Config = {
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none'
}

// eslint-disable-next-line import/no-default-export
export default config
