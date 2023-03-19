import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";
import competionReducer from "./competitions";
import votesReducer from "./votes";

const rootReducer = combineReducers({
  uiSlice: uiReducer,
  authSlice: authReducer,
  competitionSlice: competionReducer,
  votesSlice: votesReducer,
});

export default rootReducer;
