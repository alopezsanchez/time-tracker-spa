const prettierConfig = require("./prettier.config");

module.exports = {
  extends: ["react-app", "react-app/jest", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", prettierConfig]
  }
};
