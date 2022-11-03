import React from "react"
import ReactDOM from "react-dom/client"
import ShoppingCart from "./ShoppingCart"
import { type Item, items } from "./../basic-example/shoppingCart"

export const fetchStuff = async (howMany = 50) => {
    return await fetch(`https://api.openbrewerydb.org/breweries?per_page=${howMany}`).then(data => data.json())
}

ReactDOM.createRoot(document.getElementById("homework") as HTMLElement).render(
    <React.StrictMode>
        <ShoppingCart fetchStuff={fetchStuff} />
    </React.StrictMode>
)