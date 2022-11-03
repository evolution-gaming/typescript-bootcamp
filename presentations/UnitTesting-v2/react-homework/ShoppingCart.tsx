import * as React from "react";
import { calculateTotalPrice } from '../basic-example/shoppingCart';
import { type Item } from '../basic-example/shoppingCart';

type Props = {
    fetchStuff: () => Promise<any>;
}

const DELAY = 300;

/**
 * TODO: Homework
 * Implement either state heat map or a visualize coupon card state
 */
export default function ShoppingCart(props: Props) {
    const { fetchStuff } = props;
    const [items, setItems] = React.useState<any>([]);
    const [search, setSearch] = React.useState("");
    const [timeout, setSetTimeout] = React.useState(0);

    // React.useEffect(() => {
    //     const timeout = setTimeout(() => {
    //             setItems([
    //                 { name: "Item 1", id: 1 },
    //                 { name: "Item 2", id: 2 },
    //             ]);
    //     }, DELAY);
    //     return () => clearTimeout(timeout);
    // }, [fetchStuff]);

    React.useEffect(() => {
        fetchStuff().then((data) => {
            setItems(data);
        });
    }, [fetchStuff]);

    const debounce = React.useCallback((evt: any) => {
        clearTimeout(timeout);
        setSetTimeout(window.setTimeout(() => {
            setSearch(evt.target.value)
        }, DELAY));
    }, [timeout]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <input type="text" placeholder="Search" onChange={debounce} /> 
            <ul>
                {items.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase())).map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}