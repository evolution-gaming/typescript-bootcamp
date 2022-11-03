export type Item = {
    name: string;
    price: number;
    quantity: number;
}
export const items:Item[] = [
    { name: 'Bread', price: 0.8, quantity: 1 },
    { name: 'Milk', price: 1.15, quantity: 2 },
    { name: 'Cheese', price: 1.3, quantity: 1 },
    { name: 'Ham', price: 1.2, quantity: 1 },
    { name: 'Butter', price: 0.9, quantity: 1 },
    { name: 'Eggs', price: 0.3, quantity: 20 },
]

const discount = {
    percent: 0.1,
    threshold: 5,
}

/**
 * TODO: Homework
 * Implement discount card from basic-example
 * If there is a coupon code, apply the discount by 95%
 * Use the following:
 * it.each()
 * toBe()
 * toEqual()
 * toBeGreaterThan()
 * toBeLessThan()
 * toBeGreaterThanOrEqual()
 * toBeLessThanOrEqual()
 * toBeCloseTo()
 */
export function calculateTotalPrice(items: Item[]): number {
    let shipping = 20
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    if (total > discount.threshold) {
        return total - total * discount.percent + shipping
    } else {
        return total + shipping
    }
}