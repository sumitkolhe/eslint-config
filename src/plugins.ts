/* eslint-disable import/first */
// @ts-nocheck

export type InteropDefault<T> = T extends { default: infer U } ? U : T

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
  return 'default' in m ? interopDefault(m.default) : m
}

import _configJs from '@eslint/js'
export const configJs: any = interopDefault(_configJs)

import * as _pluginAntfu from 'eslint-plugin-antfu'
export const pluginAntfu: typeof import('eslint-plugin-antfu').default =
  interopDefault(_pluginAntfu)

export { default as configComments } from '@eslint-community/eslint-plugin-eslint-comments/configs'

import * as _pluginMarkdown from '@eslint/markdown'
export const pluginMarkdown: any = interopDefault(_pluginMarkdown)

import tseslint from 'typescript-eslint'
export { tseslint }

import * as _pluginUnicorn from 'eslint-plugin-unicorn'
export const pluginUnicorn: any = interopDefault(_pluginUnicorn)

import * as _pluginVue from 'eslint-plugin-vue'
export const pluginVue: any = interopDefault(_pluginVue)

import * as _pluginNode from 'eslint-plugin-n'
export const pluginNode: typeof import('eslint-plugin-n') =
  interopDefault(_pluginNode)

import * as _pluginPerfectionist from 'eslint-plugin-perfectionist'
export const pluginPerfectionist: any = interopDefault(_pluginPerfectionist)

import * as _pluginUnocss from '@unocss/eslint-plugin'
export const pluginUnocss: typeof import('@unocss/eslint-plugin').default =
  interopDefault(_pluginUnocss)

import * as _pluginPrettier from 'eslint-plugin-prettier'
export const pluginPrettier: any = interopDefault(_pluginPrettier)

import * as _configPrettier from 'eslint-config-prettier'
export const configPrettier: any = interopDefault(_configPrettier)

import * as _pluginUnusedImports from 'eslint-plugin-unused-imports'
export const pluginUnusedImports: any = interopDefault(_pluginUnusedImports)

import * as _pluginJsdoc from 'eslint-plugin-jsdoc'
export const pluginJsdoc: any = interopDefault(_pluginJsdoc)

import * as _pluginIgnore from 'eslint-config-flat-gitignore'
export const pluginIgnore: any = interopDefault(_pluginIgnore)

export * as pluginImport from 'eslint-plugin-import-x'
export * as pluginJsonc from 'eslint-plugin-jsonc'
export * as pluginYml from 'eslint-plugin-yml'

export * as parserVue from 'vue-eslint-parser'
export * as parserYml from 'yaml-eslint-parser'
export * as parserJsonc from 'jsonc-eslint-parser'

import _configCommand from 'eslint-plugin-command/config'
export const configCommand = interopDefault(_configCommand)
