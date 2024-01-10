const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    
      // failOnStatusCode: false
      // retries: 1
      video: true
    },
  },
});
