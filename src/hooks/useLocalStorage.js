import { useReducer, useEffect } from "react";
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from "../utils/localStorage";

export const ACTIONS = {
  SET_STATE: "SET_STATE",
};

const initialState = {};

const reducer = (state, { type, data = null }) => {
  if (type === ACTIONS.SET_STATE) return data;
  if (type === "test") return { ...state, test: data };

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
