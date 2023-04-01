import { ADD_ADMIN } from "../actions/admins";

export default function adminReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ADMIN:
      return [...state, payload];
    default:
      return state;
  }
}
