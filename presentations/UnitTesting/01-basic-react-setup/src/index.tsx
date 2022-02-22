import * as React from "react";
import {render} from "react-dom";
import {Todos} from "./components/Todos";

const fetcherMiddleware = {
    getTodos: () => window
        .fetch("https://jsonplaceholder.typicode.com/todos")
        .then((r) => r.json())
}


render(<Todos getTodos={fetcherMiddleware.getTodos} />, document.getElementById("root"))
