module.exports = {
  launch: {
    headless: false,
  },
  browsers: "chromium",
  browserContext: "default",
  customTestSettings: {
    "domain": "localhost",
    "port": "8080"
  }
}
