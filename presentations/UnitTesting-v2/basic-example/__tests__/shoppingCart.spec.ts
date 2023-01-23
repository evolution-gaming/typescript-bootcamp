const calculateTotalPriceWithPercentageDiscount = jest.fn().mockImplementation((total, discount) => {
    return total - total * (discount / 100)
})
jest.mock('../helpers', () => ({
    calculateTotalPriceWithPercentageDiscount: calculateTotalPriceWithPercentageDiscount
}))

import { calculateTotalPrice } from '../shoppingCart'

const items = [
    { name: 'Bread', price: 1, quantity: 1 },
]

const discount = {
    percent: 20,
    threshold: 5,
}

describe("calculateTotalPrice", () => {
    it("should return the sum of all items", () => {
        expect(calculateTotalPrice(items, discount)).toBe(21)
        expect(calculateTotalPriceWithPercentageDiscount).toHaveBeenCalled()
        expect(calculateTotalPriceWithPercentageDiscount).toHaveBeenCalledWith(1, discount.percent)
    })
})