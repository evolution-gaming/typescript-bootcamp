const { getFieldPoints} = require("../fieldUtils")
const http = require("http")

module.exports = {
  dom: {
    async readDOMField(page, radius) {
      const fieldPoints = getFieldPoints(radius)

      return await Promise.all(
        fieldPoints.map(async ({ x, y, z }) => {
          const element = await page.waitForSelector(`[data-x="${x}"][data-y="${y}"][data-z="${z}"]`)
          const value = parseInt(await element.getAttribute("data-value"))
          return { x, y, z, value }
        }),
      )
    },
  },

  rngServer() {
    return {
      async start() {
        const server = http.createServer(requestListener)
        server.listen(13337)
        server.once("listening", () => console.log("RNG server is listening on port 13337"))
      },
    }
  },
}
