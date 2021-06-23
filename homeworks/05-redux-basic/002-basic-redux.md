You should create one application using CRA or not. After you create the
application, do the following steps:

- [ ] install [redux package](https://www.npmjs.com/package/redux).
- [ ] configure [redux dev tools](https://github.com/reduxjs/redux-devtools)

You don't have to implement any UI, but you can do it if you wish. The state
might have a number type, and you should create it with the following code:

```
const balance = createStore(__YOUR_REDUCER__);
```

List of testing actions which you can use for test:

```
const array = [
    { type: "UPDATE_BALANCE", payload: 1000.0 },
    { type: "CREDIT", payload: 200.0 },
    { type: "CREDIT", payload: 100.0 },
    { type: "SUBTRACT_PERCENTAGE", payload: 14.0 },
    { type: "DEBIT", payload: 250.0 },
    { type: "UPDATE_BALANCE", payload: 1000.0 },
];
```

| Action                | Payload type | Description                                                    |
| --------------------- | ------------ | -------------------------------------------------------------- |
| `UPDATE_BALANCE`      | `number`     | Should set a new balance                                       |
| `CREDIT`              | `number`     | Should subtract payload amount to balance                      |
| `SUBTRACT_PERCENTAGE` | `number`     | Subtract a tax amount (in percentage) from the current balance |
| `DEBIT`               | `number`     | Should add payload amount from balance                         |

It will be checked only using redux dev tools where I am able to see list of
actions.

Example:

```
const balance = createStore(__YOUR_REDUCER__);
balance.dispatch({ type: "UPDATE_BALANCE", payload: 1000.0 }); // balance = 1000.0
balance.dispatch({ type: "CREDIT", payload: 200.0 }); // 800.0
balance.dispatch({ type: "DEBIT", payload: 50.0 }); // 850.0
balance.dispatch({ type: "SUBTRACT_PERCENTAGE" payload: 14.0 }); // 850.0 * (1 - 0.14) = 731
```

Also, you need to publish your homework with dev tools:

```
import { createStore, compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, undefined, composeEnhancers());
```
