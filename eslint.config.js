// eslint.config.js

const prettierPlugin = require("eslint-plugin-prettier");

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
