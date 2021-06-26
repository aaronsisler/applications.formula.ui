import { AnyAction } from "redux";

import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER
} from "../actions/counter";

const counterReducer = (state: number = 0, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case RESET_COUNTER:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
