/** @type {import('prettier').Options} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  overrides: [
    {
      files: [
        "**/node_modules/**",
        "**/dist/**",
        "**/output/**",
        "**/.changeset/**",
        "**/.idea/**",
        "**/.output/**",
        "**/.vite-inspect/**",

        "**/CHANGELOG*.md",
        "**/*.min.*",
        "**/LICENSE*",
        "**/auto-import?(s).d.ts",
        "**/components.d.ts",
        "**/pnpm-lock.yaml",
      ],
      options: {
        requirePragma: true,
      },
    },
  ],
};
