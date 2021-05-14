import {ThunkAction} from "redux-thunk";
import {State} from "../types";
import {Action} from "redux";
import {KEYBOARD_CHANGE, KEYBOARD_ENTER} from "../constants";

export function search(): ThunkAction<Promise<void>, State, WebSocket, Action> {
  return (dispatch, getState, ws) => {
    return new Promise((res) => {
      ws.send(JSON.stringify({ search: getState().search }));
      dispatch({ type: KEYBOARD_ENTER });
      res();
    });
  }
}

export function change(value: string): ThunkAction<Promise<string>, State, WebSocket, Action> {
  return (dispatch, getState, ws) => {
    return new Promise((res) => {
      ws.send(JSON.stringify({ data: value }));
      dispatch({ type: KEYBOARD_CHANGE, payload: value });
      res(value);
    });
  };
}