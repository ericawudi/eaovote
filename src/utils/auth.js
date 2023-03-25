import Cookies from "universal-cookie";
import { Constants as K } from "./constants/main";

const cookies = new Cookies();

// Check if logged in
export const isAuthenticated = () =>
  Boolean(cookies.get(K.Cookies.API_TOKEN_KEY));

// Set cookie
export const setAuthCookie = (authToken) => {
  cookies.set(K.Cookies.API_TOKEN_KEY, authToken, { path: "/" });
};

//remove cookie
export function removeCookie() {
  cookies.remove(K.Cookies.API_TOKEN_KEY);
}
