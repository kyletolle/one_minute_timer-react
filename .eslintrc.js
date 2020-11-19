module.exports = {
  extends: [
    "react-app",
    "standard-with-typescript",
    "plugin:@typescript-eslint/parser",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["**/node_modules/**"],
};
