# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
[pizza-app](https://github.com/vladislavkovaliov/pizza-apphttps://github.com/vladislavkovaliov/pizza-app)

Description task:

I would like to collect info what happens on pizza site. For that you have to integrate [redux](https://react-redux.js.org/introduction/getting-started) and [redux-thunk](https://github.com/reduxjs/redux-thunk). Both of them should simplify your development process and make extending simple.

| Action | Description |
| ------ |  ------ |
| `PIZZA_VIEWED` | when list of pizza is viewed |
| `PIZZA_SELECTED` | when a user clicks on pizza from left list of pizza |
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
Event structure of pizza is picked event:
```
{
  eventName: "PIZZA_CLICKED_FROM_LIST",
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
