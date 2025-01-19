/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: true,
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

module.exports = config;
