import Cookies from "universal-cookie";
import { constants as K } from "../libs/axios/config";
import { makePostRequest } from "../libs/axios";

const cookies = new Cookies();
const adminLoginUrl = "/login/admin";
const voterLoginUrl = "/login/voter";

const setAuthCookie = (authToken) => {
  cookies.set(K.App.API_TOKEN, authToken, { path: "/" });
};

const loginUser = (values) => {
  const { isAdmin, username, password } = values;
  const endpoint = isAdmin ? adminLoginUrl : voterLoginUrl;
  const data = { username, password };
  return makePostRequest(endpoint, { data, authToken: "" });
};

// Log out
function logUserOut() {
  cookies.remove(K.App.API_TOKEN);
}

export { setAuthCookie, loginUser, logUserOut };
