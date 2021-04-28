import React from "react";

interface PizzaPriceProps {
    price: number;
}

export function PizzaPrice({ price }: PizzaPriceProps) {
    return (
        <p><span className="text-yellow-400 mr-1">$</span>{price}</p>
    );
}
