import { calculateTotalPrice } from './_shoppingCart';

test('calculateTotalPrice', () => {
    const totalPrice = calculateTotalPrice({
        items: [
            {
                id: 1,
                name: 'Bread',
                price: 5,
                quantity: 1,
            },
        ],
        shipping: {
            cost: 5,
            destination: 'US'
        },
    });
});