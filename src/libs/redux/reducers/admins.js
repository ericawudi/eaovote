import { ADD_ADMIN, SET_ADMINS } from "../actions/admins";

export default function adminReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ADMIN:
      return [...state, payload];
    case SET_ADMINS:
      return [...payload];
    default:
      return state;
  }
}
