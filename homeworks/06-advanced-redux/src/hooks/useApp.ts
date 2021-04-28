import React from "react";
import {Pizza} from "../types";
import {getPizza} from "../services/api";
import * as R from "ramda";

export function useApp() {
    const [pizza, setPizza] =
        React.useState<Pizza[]>([]);
    const [backet, setBacket] =
        React.useState<Pizza[]>([]);

    React.useEffect(() => {
        getPizza()
            .then(pizza => { setPizza(pizza.items) });
    }, []);

    const plusPizzaBucket = React.useCallback((_id: string) => {
        const p = pizza.filter(x => x._id === _id)[0];
        setBacket([...backet, p]);
    }, [pizza, backet]);
    const minusPizzaBucket = React.useCallback((_id: string) => {
        const idx = R.findLastIndex((x: Pizza) => x._id === _id)(backet);
        if (idx !== -1) {
            setBacket(R.remove(idx, 1, backet));
        }
    }, [backet]);

    const validBasket = R.compose(
        R.values,
        R.mapObjIndexed((value: Pizza[]) => {
            return value.reduce((acc, p) => {
                return {
                    ...p,
                    price: acc.price + p.price,
                    count: acc.count + 1,
                };
            }, { count: 0, price: 0 });
        }),
        R.groupBy((x: Pizza) => x._id),
    )(backet);

    return {
        totalPrice: validBasket
            .reduce((acc, p: Pizza) =>
                acc + p.price, 0),
        pizza,
        bucket: validBasket,
        plusPizzaBucket,
        minusPizzaBucket,
    };
}
