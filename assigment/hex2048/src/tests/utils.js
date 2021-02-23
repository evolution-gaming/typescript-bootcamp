const { getFieldPoints } = require("../fieldUtils")
const http = require("http")

module.exports = {
  async readDOMField(page, radius) {
    const fieldPoints = getFieldPoints(radius)

    return await Promise.all(
      fieldPoints.map(async ({ x, y, z }) => {
        const element = await page.waitForSelector(`[data-x="${x}"][data-y="${y}"][data-z="${z}"]`)
        const value = parseInt(await element.evaluate(e => e.getAttribute("data-value")))
        return { x, y, z, value }
      }),
    )
  },
}
