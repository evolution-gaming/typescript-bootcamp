type ShoppingCartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type Shipping = {
    cost: number;
    destination: string;
};

type Discount = number;

type ShoppingCart = {
    items: ShoppingCartItem[];
    shipping: Shipping;
    discount?: Discount;
};

const shoppingCart: ShoppingCart = {
    items: [
        {
            id: 1,
            name: 'T-Shirt',
            price: 10,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Pants',
            price: 20,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Hat',
            price: 5,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Socks',
            price: 2,
            quantity: 5,
        },
        {
            id: 5,
            name: 'Jacket',
            price: 50,
            quantity: 1,
        }
    ],
    shipping: {
        cost: 5,
        destination: 'US'
    },
    discount: 0.1
};

/**
 * Calculate the total price of the shopping cart with shipping and discount
 * If item quantity is greater than 3, apply a 10% discount to that item
 * If destination is US, apply a 10% discount to the total price
 */
export function calculateTotalPrice(shoppingCart: ShoppingCart) {
    const { items, shipping, discount } = shoppingCart;
    let totalPrice = 0;

    for (const item of items) {
        if (item.quantity > 3) {
            totalPrice += item.price * item.quantity * 0.9;
        } else {
            totalPrice += item.price * item.quantity;
        }
    }

    totalPrice += shipping.cost;

    if (shipping.destination === 'US') {
        totalPrice *= 0.9;
    }

    if (discount) {
        totalPrice *= 1 - discount;
    }

    return totalPrice;
}








