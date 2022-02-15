module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "react/no-array-index-key": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".tsx", ".ts"],
      },
    ],
    "react/jsx-no-constructed-context-values": "off",
    "react/prop-types": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        tsx: "never",
        ts: "never",
      },
    ],
  },
};
