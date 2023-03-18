import { configureStore } from "@reduxjs/toolkit";
// import {  applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./local-storage";

//functions to persist state in local storage

const persistState = loadStateFromLocalStorage();

const showDevTools =
  process.env.NODE_ENV !== "production" && typeof window !== "undefined";

const store = configureStore({
  reducer: rootReducer,
  devTools: showDevTools,
  preloadedState: persistState,
});

store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
