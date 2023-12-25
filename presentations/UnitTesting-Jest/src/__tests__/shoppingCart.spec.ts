import { calculateTotal } from './../shoppingCart';

test("adding two numbers", () => {
    const value = calculateTotal(1);

    expect.assertions(2)
});