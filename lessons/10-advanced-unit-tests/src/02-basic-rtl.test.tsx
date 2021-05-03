import * as React from "react"
import { render } from "@testing-library/react"
import { Message } from "./01-basic"

describe("02-basic-RTL", () => {
  describe("Message", () => {
    it("assert that Message renders a div with the correct message inside", () => {
      const { getByTestId } = render(<Message message={"hello"} />)
      expect(getByTestId("message-box").innerHTML).toBe("hello")
    })

    it.skip("assert that Message renders a div with the correct message inside (jest-dom-testing-library)", () => {
      const { getByTestId } = render(<Message message={"hello"} />)
      expect(getByTestId("message-box")).toContainHTML("hello")
    })
  })
})
