const { chromium } = require("playwright-chromium")
const { getFieldPoints } = require("../fieldUtils")
const { Server } = require("../rngServer")
const { launchOptions } = require("../../jest-playwright.config")
const {
  dom: { readDOMField },
} = require("./utils")

let browser
let page
let server
let radius

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

describe("Hex game launch", () => {
  beforeAll(async () => {
    server = new Server(true)
    browser = await chromium.launch(launchOptions)
    page = await browser.newPage()
    await server.start()
  })

  afterAll(async () => {
    await browser.close()
    await server.end()
  })

  // beforeEach(async () => {
    // page = await browser.newPage()
  // })

  // afterEach(async () => {
  //   await page.close()
  // })

  describe("radius 2", () => {
    radius = 2
    it("should render correct field with data-x, data-y, data-z, data-value with 0", async () => {
      const handler = jest.fn(() => [])
      const expected = getFieldPoints(radius).map(c => ({ ...c, value: 0 }))

      server.changeHandler(handler)

      await page.goto(`localhost:8080/#test${radius}`)
      await delay(300)

      const field = await readDOMField(page, radius)

      expect(field).toEqual(expect.arrayContaining(expected))
    })

    it("should send correct request to rng server", async () => {
      const cells = [{ x: 0, y: 0, z: 0, value: 8 }]
      const handler = jest.fn(() => cells)
      server.changeHandler(handler)

      await page.goto(`localhost:8080/#test${radius}`)
      await delay(300)

      await expect(handler).toBeCalled()
    })

    describe("moves", () => {
      it.each([
        ["north", "KeyW", { x: 0, y: 1, z: -1 }],
        ["north-west", "KeyQ", { x: -1, y: 1, z: 0 }],
        ["north-east", "KeyE", { x: 1, y: 0, z: -1 }],
        ["south", "KeyS", { x: 0, y: -1, z: 1 }],
        ["south-west", "KeyA", { x: -1, y: 0, z: 1 }],
        ["south-east", "KeyD", { x: 1, y: -1, z: 0 }],
      ])("should move to %s after press %s", async (_, keyCode, expected) => {
        const cells = [{ x: 0, y: 0, z: 0, value: 128 }]

        server.changeHandler((_, field) => (field.length === 0 ? cells : []))

        await page.goto(`localhost:8080/#test${radius}`)
        await delay(300)
        await page.keyboard.press(keyCode)
        await delay(300)

        const field = await readDOMField(page, radius)

        expect(field.filter(({ value }) => value === 128)).toEqual(
          expect.arrayContaining([{ ...expected, value: 128 }]),
        )
      })
    })

    describe("adding", () => {
      it.each([
        [
          "should add 2 cells with same value",
          "KeyW",
          [
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 2 },
          ],
          [{ x: 0, y: 1, z: -1, value: 4 }],
        ],
        [
          "should move 3 cells and add 2 cells",
          "KeyW",
          [
            { x: 0, y: 1, z: -1, value: 2 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: -1, z: 1, value: 2 },
          ],
          [
            { x: 0, y: 1, z: -1, value: 4 },
            { x: 0, y: 0, z: 0, value: 2 },
          ],
        ],
      ])("%s", async (_message, keyCode, startPosition, expected) => {
        server.changeHandler((_, field) => (field.length === 0 ? startPosition : []))

        await page.goto(`localhost:8080/#test${radius}`)
        await delay(300)
        await page.keyboard.press(keyCode)
        await delay(300)

        const field = await readDOMField(page, radius)

        expect(field.filter(({ value }) => value > 0)).toEqual(expect.arrayContaining(expected))
      })
    })

    describe("status", () => {
      it('should show status "playing" if game isn\'t over', async () => {
        const cells = []
        const handler = jest.fn(() => cells)
        server.changeHandler(handler)

        await page.goto(`localhost:8080/#test${radius}`)
        await delay(300)

        const statusElement = await page.waitForSelector("[data-status]")
        const status = await statusElement.getAttribute("data-status")

        expect(status).toBe("playing")
      })
      it('should show status "game-over" if game is over', async () => {
        const cells = [
          { x: -1, y: 1, z: 0, value: 64 },
          { x: -1, y: 0, z: 1, value: 16 },
          { x: 0, y: 1, z: -1, value: 16 },
          { x: 0, y: 0, z: 0, value: 32 },
          { x: 0, y: -1, z: 1, value: 2 },
          { x: 1, y: 0, z: -1, value: 4 },
          { x: 1, y: -1, z: 0, value: 8 },
        ]
        const handler = jest.fn(() => cells)
        server.changeHandler(handler)

        await page.goto(`localhost:8080/#test${radius}`)
        await delay(300)

        const statusElement = await page.waitForSelector("[data-status]")
        const status = await statusElement.getAttribute("data-status")

        expect(status).toBe("game-over")
      })
    })
  })
})
