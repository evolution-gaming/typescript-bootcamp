import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension';
import { emails } from "./emails";
import { search } from "./search";
import {EMAIL_UPDATES} from "../constants";

const ws = new WebSocket("ws://localhost:8080");

export const store = createStore(
    combineReducers({
        emails: emails,
        search: search,
    }),
    composeWithDevTools(
        applyMiddleware(
          thunk.withExtraArgument(ws)
        )
    ),
);

ws.onmessage = (msg) => {
  try {
    console.log(msg);
    const emails: string[] = JSON.parse(msg.data);
    store.dispatch({
      type: EMAIL_UPDATES,
      payload: emails,
    });
  } catch (ex) {
    console.error(ex);
  }
};

