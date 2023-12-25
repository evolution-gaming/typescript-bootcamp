type ShoppingCart = {
    items: Item[];
    shipping: {
        location: string;
        price: number;
    },
    discount?: number;
    paymentMethod?: string;
}

type Item = {
    name: string;
    price: number;
    count: number;
}

export const shoppingCartData: ShoppingCart = {
    items: [
        {
            name: 'T-shirt',
            price: 10,
            count: 2
        },
        {
            name: 'Pants',
            price: 20,
            count: 1
        }
    ],
    shipping: {
        location: 'USA',
        price: 5
    },
    discount: 5,
}

export function calculateTotal(cart: ShoppingCart) {
    const { items, shipping, discount = 0 } = cart;

    // if shipping location is not USA, add 10 to shipping price
    if (shipping.location !== 'USA') {
        shipping.price += 10;
    }

    // if payment method is not credit card, add 5 to shipping price
    if (cart.paymentMethod !== 'credit card') {
        shipping.price += 5;
    }

    const total = items.reduce((total, item) => total + item.price * item.count, 0);
    return total + shipping.price - discount;
}

// console.log(calculateTotal(shoppingCartData));