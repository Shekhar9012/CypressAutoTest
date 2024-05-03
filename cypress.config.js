const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sqgtmx',
  e2e: {
    specPattern: 'cypress/OrangeHRM Cases/**/*.cy.{js, jsx, ts, tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



