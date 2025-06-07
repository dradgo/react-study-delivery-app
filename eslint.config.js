module.exports = [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    extends: ["react-app", "react-app/jest", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }]
    }
  }
];
