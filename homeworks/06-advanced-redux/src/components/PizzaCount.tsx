import React from "react";

interface PizzaCountProps {
    count: number
}

export function PizzaCount({ count }: PizzaCountProps) {
    return  (
        <p><span className="text-yellow-400 mr-1">x</span>{count}</p>
    );
}
