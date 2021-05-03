import React from "react"
import { act, render } from "@testing-library/react"
import { Timer } from "./03-timer"

beforeEach(() => {
  jest
    .useFakeTimers("modern")
    .setSystemTime(new Date("2021-05-03").getTime())
})

afterEach(() => {
  jest
    .useRealTimers()
})

describe("03-timer", () => {
  describe("Timer", () => {
    it("renders a component", () => {
      expect(render(<Timer/>)).toBeDefined()
    })

    it("renders current datetime by default", () => {
      const { getByTestId } = render(<Timer />)
      expect(getByTestId("datetime")).toHaveTextContent("2021-05-03 00:00:00")
    })

    it("does not change datetime until start button is clicked", () => {
      const { getByTestId } = render(<Timer />)
      act(() => {
        jest.advanceTimersByTime(1000)
      })
      expect(getByTestId("datetime")).toHaveTextContent("2021-05-03 00:00:00")
    })

    it.todo("changes datetime each seconds when start button is clicked")

    it.todo("stops updating datetime when stop button is clicked")
  })
})
