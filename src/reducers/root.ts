import { combineReducers } from "redux";
import adminReducer from "./admin";
import applicantReducer from "./applicant";
import applicationReducer from "./application";
import tenantReducer from "./tenant";
import userReducer from "./user";

const rootReducer = combineReducers({
  admin: adminReducer,
  applicant: applicantReducer,
  application: applicationReducer,
  tenant: tenantReducer,
  user: userReducer
});

export default rootReducer;
