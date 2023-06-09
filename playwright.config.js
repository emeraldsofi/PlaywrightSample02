// @ts-check
const { defineConfig, devices } = require('@playwright/test');


const config = {
  testDir: './tests',
  /* Run tests in files in parallel */
timeout: 30*1000,
expect: {
  timeout : 5000

},

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    headless:false,
browserName : 'chromium',
    // /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
  },

 
}

module.exports = config;

