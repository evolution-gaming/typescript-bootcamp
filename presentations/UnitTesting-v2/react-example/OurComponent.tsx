import * as React from 'react';

export const OurComponent = () => {
    const [search, setSearch] = React.useState("");

    const [items, setItems] = React.useState([
        "Item number one",
        "Some other item",
        "And another item",
        "Lastly number four",
    ]);

    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, []);

    return (
        <div>
            <h1>Our Component</h1>
            <input type="text" placeholder="our awesome input" value={search} onChange={onChange} />
            <ul>
                {items.length ? items.filter(e => e.includes(search)).map((item, index) => <li key={index}>{item}</li>) : <li>no items</li>}
            </ul>
        </div>
    )
};