import {KEYBOARD_CHANGE} from "../../constants";

export function search(search = "", action: any) {
  const { type, payload } = action;
  switch (type) {
    case KEYBOARD_CHANGE: {
      return payload;
    }
    default: {
      return search;
    }
  }
}