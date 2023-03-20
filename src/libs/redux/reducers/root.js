import { combineReducers } from "redux";
import authReducer from "./auth";
import uiReducer from "./ui";
import competionReducer from "./user/competitions";
import votesReducer from "./user/votes";

const rootReducer = combineReducers({
  uiSlice: uiReducer,
  authSlice: authReducer,
  competitionSlice: competionReducer,
  votesSlice: votesReducer,
});

export default rootReducer;
