import Cookies from "universal-cookie";
import { makePostRequest } from "../libs/axios";
import { Constants as K } from "../utils/constants/main";

const cookies = new Cookies();
const adminLoginUrl = "/login/admin";
const voterLoginUrl = "/login/voter";

const loginUser = (data) => {
  console.log({ LOGIN: data });
  const { isAdmin, username, password } = data;
  const endpoint = isAdmin ? adminLoginUrl : voterLoginUrl;
  return makePostRequest(endpoint)({ username, password });
};

// Log out
function logUserOut() {
  cookies.remove(K.Cookies.API_TOKEN_KEY);
}

export { loginUser, logUserOut };
