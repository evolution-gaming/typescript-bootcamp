[pizza-app](https://github.com/vladislavkovaliov/pizza-app)

**Deadline: 05.05.2021 23:59 Minsk**

Description task:

I would like to collect info what happens on pizza site. For that you have to integrate [redux](https://react-redux.js.org/introduction/getting-started) and [redux-thunk](https://github.com/reduxjs/redux-thunk). Both of them should simplify your development process and make extending simple.

Action names and description:
| Action | Description |
| ------ |  ------ |
| `PIZZA_VIEWED` | when list of pizzas is viewed |
| `PIZZA_SELECTED` | when a user clicks on pizza from left list of pizza and pizza is inserted in basket |
| `PIZZA_ADDED_INTO_BASKET` | when a pizza is inserted into a basket |
| `PIZZA_REMOVED_FROM_BASKET` | when a pizza is deleted from a basket |
 
Expected result: 

For now it should be enough to print those information into console and make a POST call to `http://localhost:3001/log`.
```
fetch('http://localhost:3001/log', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({

    })
}).then((json) => {
    console.log(json);
}).catch((ex) => {
    console.log(ex)
});
```

---
Event structure of pizza is selected event:
```
{
  eventName: "PIZZA_SELECTED",
  pizzaName: Italian pizza,
  pizzaPrice: 5.43
}
```
---
Event structure of pizza is added into the basket:
```
{
  eventName: "PIZZA_ADDED_INTO_BASKET",
  pizzaName: Italian pizza,
  pizzaPrice: 5.43
}
```
Event structure of pizza is removed into the basket:
```
{
  eventName: "PIZZA_REMOVED_FROM_BASKET",
  pizzaName: Italian pizza,
  pizzaPrice: 5.43
}
```
Event structure of list is viewed:
```
{
  eventName: "PIZZA_VIEWED",
}
```
The structure of redux can be chosen by you.
---
How to run echo-server. Go to `echo-server` folder. Install package:
```
npm install
```
Run server:
```
ts-node ./server.ts
```
