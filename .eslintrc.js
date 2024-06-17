module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next",
    "eslint:recommended",
    "prettier",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint", "react", "react-hooks"],
  root: true,
  rules: {
    // TypeScript rules
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    // JavaScript rules
    "object-shorthand": "warn",
    "prettier/prettier": "warn",
    "quote-props": ["warn", "as-needed"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: ["ts", "tsx"],
      },
    ],
    // React rules
    "react/jsx-fragments": ["warn", "syntax"], // Shorthand syntax for React fragments
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
