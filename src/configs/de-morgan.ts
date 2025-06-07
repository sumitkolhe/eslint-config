import { pluginDeMorgan } from '../plugins'
import type { Config } from '../types'

export const deMorgan = (): Config[] => [
  {
    ...pluginDeMorgan.configs.recommended,
    name: 'config/de-morgan',
  },
]
