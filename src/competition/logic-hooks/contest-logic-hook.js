import { useReducer } from "react";

const initialState = {};
const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
export default function useContestLogicHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
