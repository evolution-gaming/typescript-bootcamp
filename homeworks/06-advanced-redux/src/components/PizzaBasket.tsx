import * as R from "ramda";
import React from "react";
import {Pizza} from "../types";
import {PizzaBasketItem} from "./PizzaBasketItem";

interface PizzaBucketProps {
    pizza: Array<Pizza & {count: number}>,
    onMinus: (_id: string) => void;
}

export function PizzaBasket({pizza, onMinus}: PizzaBucketProps) {
    return R.map((p) =>
        <PizzaBasketItem
            _id={p._id}
            onMinus={onMinus}
            key={p._id}
            price={p.price}
            name={p.name}
            count={p.count}
        />, pizza);
}
