import { act, renderHook } from "@testing-library/react-hooks"
import { useEventListener } from "./05-hooks-task"

describe("05-hooks-task", () => {
  describe("useEventListener", () => {
    const eventName = "click"
    const handler = jest.fn()
    const listeners = new Map<string, (...args: any[]) => void>()
    const element = document.createElement("div")

    beforeEach(() => {
      spyOn(element, "addEventListener").and.callFake((eventName: string, handler: (...args: any[]) => void) => {
        listeners.set(eventName, handler)
      })

      spyOn(element, "removeEventListener").and.callFake((eventName: string, handler: (...args: any[]) => void) => {
        listeners.delete(eventName)
      })
    })

    afterEach(() => {
      listeners.clear()
      handler.mockReset()
    })

    it.todo("renders a hook")

    it.todo("adds correct event listener")

    it.todo("removes attached event listener")

    it.todo("re-attaches event listener if event name is changed")

    it.todo("does not re-attach event listener if event handler is changed")
  })
})
