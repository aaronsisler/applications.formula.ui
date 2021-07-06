import { combineReducers } from "redux";
import tenantReducer from "./tenant";
import userReducer from "./user";

const rootReducer = combineReducers({
  tenant: tenantReducer,
  user: userReducer
});

export default rootReducer;
