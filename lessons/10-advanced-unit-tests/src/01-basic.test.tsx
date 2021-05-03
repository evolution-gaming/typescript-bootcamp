import * as React from "react"
import * as ReactDom from "react-dom"
import { Message } from "./01-basic"

describe("01-basic", () => {
  describe("Message", () => {
    /**
     * Without using any library except react, react-dom & jest
     */
    it("assert that Message renders a div with the correct message inside", () => {
      const container = document.createElement("div")

      ReactDom.render(<Message message={"hello"} />, container)

      expect(
        container.querySelector("div [data-testid='message-box']")?.innerHTML
      ).toBe("hello")
    })
  })
})
