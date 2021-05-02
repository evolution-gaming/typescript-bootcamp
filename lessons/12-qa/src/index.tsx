import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./examples/01-bind-in-render"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)

