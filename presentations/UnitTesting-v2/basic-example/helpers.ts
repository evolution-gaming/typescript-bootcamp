export function calculateTotalPriceWithPercentageDiscount(total: number, discount: number): number {
    return total - total * (discount / 100)
}