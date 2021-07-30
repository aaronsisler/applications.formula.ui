import { combineReducers } from "redux";
import applicantReducer from "./applicant";
import applicationReducer from "./application";
import tenantReducer from "./tenant";
import userReducer from "./user";

const rootReducer = combineReducers({
  applicant: applicantReducer,
  application: applicationReducer,
  tenant: tenantReducer,
  user: userReducer
});

export default rootReducer;
