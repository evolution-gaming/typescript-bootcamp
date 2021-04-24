
From lesson we already have implementation of function which is `createStore`. 
Codesandbox can be forked.

The task is to implement `combineReducer` function which should match to `https://redux.js.org/api/combinereducers`.

```
const app = combineReducer({
  counter: counter,
  counter2: counter2,
});

const appStore = createStore(app);
```

Expected: 
The reducer counter2 should have diffenent actions type name and they should be dispatched after counter's actions.
