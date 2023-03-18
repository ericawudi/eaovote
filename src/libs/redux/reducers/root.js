import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  uiSlice: uiReducer,
  authSlice: authReducer,
});

export default rootReducer;
