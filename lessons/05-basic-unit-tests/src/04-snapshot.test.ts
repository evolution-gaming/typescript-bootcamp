import { createDocument, createParagraph } from "./04-snapshot"

describe.skip("04-snapshot", () => {
  /**
   * Example 1
   */
  describe("createParagraph", () => {
    it("asserts returning <p> element", () => {
      expect(createParagraph("This is Paragraph")).toMatchSnapshot()
    })
  })

  describe("createDocument", () => {
    it.todo("asserts returning proper document")
  })
})
