import { fibonacci, isPrime } from "./01-pure-code"

describe("01-pure-code", () => {
  /**
   * Example 1
   */
  describe("fibonacci", () => {
    it("asserts 3th number = 2", () => {
      expect(fibonacci(3)).toEqual(2)
    })

    it("asserts 10th number = 55", () => {
      expect(fibonacci(10)).toEqual(55)
    })

    it("asserts 0th number to be defined", () => {
      expect(fibonacci(0)).toBeDefined()
    })
  })

  /**
   * Example 2
   */
  describe.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
  ])("asserts %i number = %i", (n, expected) => {
    expect(fibonacci(n)).toEqual(expected)
  })

  /**
   * Exercise 1
   */
  describe("isPrime", () => {
    it.todo("asserts 19 to be prime")

    it.todo("asserts 25 not to be prime")

    it.todo("throws an error for NaN argument")

    it.todo("throws an error for infinite argument")
  })
})
