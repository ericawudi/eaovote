import { LOGIN_SUCCESS } from "../actions/auth";
const initialState = { id: null, isAdmin: false };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
