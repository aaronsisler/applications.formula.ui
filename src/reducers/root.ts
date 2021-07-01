import { combineReducers } from "redux";
import counterReducer from "./counter";
import tenantsReducer from "./tenants";
import userReducer from "./user";

const rootReducer = combineReducers({
  count: counterReducer,
  tenants: tenantsReducer,
  user: userReducer
});

export default rootReducer;
