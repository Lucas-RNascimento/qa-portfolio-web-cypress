const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/specs/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
  },
},
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports/mocha",
    charts: true,
    overwrite: false,
    html: false,
    json: true
  }
});
