// eslint.config.js

import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }]
    },
  },
];
