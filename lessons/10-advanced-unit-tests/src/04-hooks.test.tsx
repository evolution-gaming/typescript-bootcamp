import React from "react"
import { act, renderHook } from "@testing-library/react-hooks"
import { useTimer } from "./04-hooks"

beforeEach(() => {
  jest
    .useFakeTimers("modern")
    .setSystemTime(new Date("2021-05-03").getTime())
})

afterEach(() => {
  jest
    .useRealTimers()
})

describe("04-hooks", () => {
  describe("useTimer", () => {
    it("renders a hook", () => {
      expect(renderHook(() => useTimer())).toBeDefined()
    })

    it("has a proper default value", () => {
      const { result } = renderHook(() => useTimer())
      expect(result.current.datetime).toBe("2021-05-03 00:00:00")
    })

    it("does not change datetime until start is fired", () => {
      const { result } = renderHook(() => useTimer())
      act(() => {
        jest.advanceTimersByTime(1000)
      })
      expect(result.current.datetime).toBe("2021-05-03 00:00:00")
    })

    it("changes datetime each seconds after start is fired", () => {
      const { result } = renderHook(() => useTimer())
      act(() => {
        result.current.start()
      })
      act(() => {
        jest.advanceTimersByTime(1000)
      })

      expect(result.current.datetime).toBe("2021-05-03 00:00:01")
    })
  })
})
