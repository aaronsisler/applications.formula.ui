import { AnyAction } from "redux";

import {
  CLEAR_APPLICATION,
  FETCH_APPLICATION_SUCCESS
} from "../actions/application";
import { Application } from "../models/application";

const applicationReducer = (state: Application = {}, action: AnyAction) => {
  switch (action.type) {
    case CLEAR_APPLICATION:
      return null;
    case FETCH_APPLICATION_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default applicationReducer;
