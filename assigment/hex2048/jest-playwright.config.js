module.exports = {
  launchOptions: {
    // set false if you want to see test in progress
    slowMo: 200,
    headless: false,
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 800,
      height: 600,
    },
  },
  browsers: ["chromium"],
  devices: [],
}
