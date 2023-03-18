import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";
import competionReducer from "./competitions";

const rootReducer = combineReducers({
  uiSlice: uiReducer,
  authSlice: authReducer,
  competitionSlice: competionReducer,
});

export default rootReducer;
