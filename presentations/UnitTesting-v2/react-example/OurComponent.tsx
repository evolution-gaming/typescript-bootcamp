import * as React from 'react';

export const OurComponent = () => {
    const [search, setSearch] = React.useState("");

    const [items, setItems] = React.useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
    ]);

    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, []);

    return (
        <div>
            <h1>Our Component</h1>
            <input type="text" placeholder="out awesome input" value={search} onChange={onChange} />
            <ul>
                {items.length ? items.filter(e => e.includes(search)).map((item, index) => <li key={index}>{item}</li>) : <li>no items</li>}
            </ul>
        </div>
    )
};