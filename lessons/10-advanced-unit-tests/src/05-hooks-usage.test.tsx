import React from "react"
import { act, render } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import { Timer } from "./05-hooks-usage"
import { useTimer } from "./04-hooks"

jest.mock("./04-hooks")

const mockUseTimer = mocked(useTimer)
afterEach(() => {
  mockUseTimer.mockReset()
})

describe("05-hooks-usage", () => {
  describe("Timer", () => {
    it.todo("uses hook value by default")
    it.todo("handles click on start button")
    it.todo("handles click on stop button")
  })
})
