// eslint.config.mjs

import prettierPlugin from "eslint-plugin-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint,
    },
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }]
    },
  },
];
