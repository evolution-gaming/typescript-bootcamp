import React from "react"
import { render } from "@testing-library/react"
import { Message } from "./07-snapshot"

describe("07-snapshot", () => {
  describe("Message", () => {
    it("has a proper content #1", () => {
      const { container } = render(
        <Message
          message={"hello"}
          color={"#f00"}
        />
      )
      expect(container.firstChild).toMatchSnapshot()
    })

    it("has a proper content #2", () => {
      const { container } = render(
        <Message
          message={"hello"}
        />
      )
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
