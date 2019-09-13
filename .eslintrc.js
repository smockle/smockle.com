module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  // extends: "react-app",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: { modules: true }
  }
};
