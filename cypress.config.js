const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/specs/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
  },
});
