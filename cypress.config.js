const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  watchForFileChanges: true,
  experimentalWebKitSupport: false,
  video: false,
  experimentalStudio: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 100000,
  viewportWidth:1920,
  viewportHeight: 1080,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
