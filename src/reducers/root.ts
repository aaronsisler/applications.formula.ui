import { combineReducers } from "redux";
import applicationReducer from "./application";
import tenantReducer from "./tenant";
import userReducer from "./user";

const rootReducer = combineReducers({
  application: applicationReducer,
  tenant: tenantReducer,
  user: userReducer
});

export default rootReducer;
