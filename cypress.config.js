const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 30000,
    baseUrl: 'https://www.latamairlines.com',
    chromeWebSecurity: false,
    uncaughtException: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
