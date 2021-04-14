import { fetchTodos } from "./03-mocking-modules"
import axios from "axios"
import { mocked } from "ts-jest/utils"

jest.mock("axios")

const mockAxios = mocked(axios, true)
afterEach(() => {
  mockAxios.mockReset()
})

describe.skip("03-mocking-modules", () => {
  describe("fetchTodos", () => {
    /**
     * Example 1
     */
    it("asserts using a proper API url", async () => {
      await fetchTodos()
      expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/')
    })

    /**
     * Example 2
     */
    it("asserts using a proper API url with params", async () => {
      await fetchTodos(1)
      expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1')
    })

    /**
     * Exercise 1
     */
    it.todo("asserts returning a list of todos")

    /**
     * Exercise 2
     */
    it.todo("asserts returning an empty list if there is an error")
  })
})
