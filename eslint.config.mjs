// eslint.config.mjs

import path from "path";
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
        tsconfigRootDir: path.resolve('.'),
      },
    },
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint,
    },
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
    },
  },
];
