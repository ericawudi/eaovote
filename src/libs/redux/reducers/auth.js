import { LOGIN_SUCCESS, UPDATE_ADMIN_STATUS } from "../actions/auth";
const initialState = { id: null, isAdmin: true };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, ...payload };
    case UPDATE_ADMIN_STATUS:
      return { ...state, isAdmin: payload };
    default:
      return state;
  }
}
