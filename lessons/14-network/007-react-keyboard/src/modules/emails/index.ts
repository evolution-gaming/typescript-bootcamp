import {EMAIL_UPDATES} from "../../constants";

export function emails(emails = [], action: any) {
  const { type, payload } = action;
  switch(type) {
    case EMAIL_UPDATES:
      return payload;
    default: {
      return emails;
    }
  }
}
