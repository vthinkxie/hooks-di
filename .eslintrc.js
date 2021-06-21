module.exports = {
  ignorePatterns: ["**/*.js"],
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "no-console": "off",
    "linebreak-style": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "unused-imports/no-unused-imports": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
