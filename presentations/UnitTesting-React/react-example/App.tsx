import React from "react"
import { createRoot } from "react-dom/client"
import { OurComponent } from "./OurComponent"
import { Provider } from "react-redux"
import { store, OurCounterReduxComponent } from "./ReduxExample"

createRoot(document.getElementById("example") as HTMLElement).render(
    <OurComponent />
)

createRoot(document.getElementById('redux-example') as HTMLElement).render(
    <Provider store={store}>
        <OurCounterReduxComponent/>
    </Provider>
)