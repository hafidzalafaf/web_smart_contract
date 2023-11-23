module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-unresolved": "off",
    "react/display-name": "off",
    "import/namespace": "off",
    "@typescript-eslint/no-redeclare": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
};
