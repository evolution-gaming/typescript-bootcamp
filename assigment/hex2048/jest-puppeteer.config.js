module.exports = {
  launch: {
    headless: false,
  },
  browsers: "chromium",
  browserContext: "default",
  customTestSettings: {
    "url": "http://localhost:8080"
  }
}
