// eslint.config.js

/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    ignores: ["node_modules", "out", "z"],
  },
  {
    // Configuration for JavaScript files
    files: ["*.js", "*.jsx"],
    languageOptions: {
      parser: require("espree"), // use the espree parser directly
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "import": require("eslint-plugin-import"),
    },
    rules: {
      // Add any JavaScript specific rules here
    },
  },
  {
    // Configuration for TypeScript files
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"), // use the TypeScript ESLint parser
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "unused-imports": require("eslint-plugin-unused-imports"),
      "import": require("eslint-plugin-import"),
    },
    rules: {
      "react/destructuring-assignment": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "@next/next/no-img-element": "off",
      "import/order": "off",
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true, // Adjust based on your needs
        },
      ],
    },
  },
];

module.exports = config;
