import { calculateTotalPriceWithPercentageDiscount } from './helpers'

export type Item = {
    name: string;
    price: number;
    quantity: number;
}

const items:Item[] = [
    { name: 'Bread', price: 0.8, quantity: 1 },
    { name: 'Milk', price: 1.15, quantity: 2 },
    { name: 'Cheese', price: 1.3, quantity: 1 },
    { name: 'Ham', price: 1.2, quantity: 1 },
    { name: 'Butter', price: 0.9, quantity: 1 },
    { name: 'Eggs', price: 0.3, quantity: 20 },
]

const discount = {
    percent: 20,
    threshold: 5,
}

export function calculateTotalPrice(items: Item[], discount: { percent: number, threshold: number }): number {
    let shipping = 20
    let total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const totalWithDiscount = calculateTotalPriceWithPercentageDiscount(total, discount.percent)

    if (total > discount.threshold) {
        total = totalWithDiscount
    }

    return total + shipping
}