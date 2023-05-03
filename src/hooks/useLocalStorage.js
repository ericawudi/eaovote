import { useReducer, useEffect } from "react";
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from "../utils/localStorage";

const SLICES = {
  notifications: "notifications",
};

const ACTIONS = {
  SET_STATE: "SET_STATE",
};

const initialState = {
  notifications: [],
};

const reducer = (state, { type, data = null }) => {
  if (type === ACTIONS.SET_STATE) return { ...state, data };

  if (type === ACTIONS.RESET_NOTIFICATIONS) {
    return { ...state, notifications: [] };
  }

  return state;
};

export default function useLocalStorage() {
  const [state, updateLocalStorage] = useReducer(reducer, initialState);

  useEffect(() => {
    const localStorageState = loadStateFromLocalStorage();
    console.log({ localStorageState });
    if (localStorageState === undefined) return;
    updateLocalStorage({ type: "SET_STATE", data: localStorageState });
  }, []);

  useEffect(() => saveStateToLocalStorage(state), [state]);

  return { state, updateLocalStorage };
}

export { SLICES, ACTIONS };
