import { calculateTotalPrice, items } from '../shoppingCart'

describe("calculateTotalPrice", () => {
    it("should return the sum of all items", () => {
        expect(calculateTotalPrice(items)).toBe(31.25)
    })
})