module.exports = {
  launchOptions: {
    // set false if you want to see test in progress
    headless: true,
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
