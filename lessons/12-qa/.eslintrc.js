module.exports = {
  extends: ["airbnb-typescript"],

  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },

  rules: {
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off"
  }
}
