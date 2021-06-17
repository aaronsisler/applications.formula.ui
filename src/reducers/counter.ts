import { AnyAction } from "redux";

import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/counter";

const counterReducer = (state = { count: 0 }, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

export default counterReducer;
