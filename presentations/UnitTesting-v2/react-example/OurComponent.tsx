import * as React from 'react'

export const OurComponent = () => {
    const [search, setSearch] = React.useState("")

    const [items, setItems] = React.useState([
        "Item number one",
        "Some other item",
        "And another item",
        "Lastly number four",
    ])

    const onChangeHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }, [])

    const onClickHandler = React.useCallback(() => {
        setSearch("four")
    }, [])

    const nextPageHandler = React.useCallback(() => {
        setTimeout(() => {
            setItems([
                "Item number five",
                "Some other item number 6",
                "And another item - 7",
                "Lastly number 8",
            ])
        }, 1000)
    }, [])

    return (
        <div>
            <h1>Our Component</h1>
            <input type="text" placeholder="our awesome input" value={search} onChange={onChangeHandler} />
            <ul>
                {items.length ? items.filter(e => e.includes(search)).map((item, index) => <li key={index}>{item}</li>) : <li>no items</li>}
            </ul>
            <button onClick={onClickHandler}>Search for item number four</button>
            <button onClick={nextPageHandler}>Next page</button>
        </div>
    )
}