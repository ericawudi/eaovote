import Cookies from "universal-cookie";
import { APISecuredAxios } from "./auth";
import { Constants as K } from "./constants";

const cookies = new Cookies();

// Log user in
export function loginUser(username, password) {
  const resp = APISecuredAxios()
    .post("/login.php", {
      username,
      password,
    })
    .then((resp) => {
      if (resp.data?.status === 200) {
        cookies.set(K.App.API_TOKEN, resp.data?.authToken, {
          path: "/",
        });
      }
      return resp;
    })
    .catch((error) => {
      return { data: { message: error?.message } };
    });
  return resp;
}

// Log out
export function logUserOut() {
  cookies.remove(K.App.API_TOKEN);
}
