//set-up axios

import axios from "axios";
import Cookies from "universal-cookie";
import { Constants as K } from "./constants";

const cookies = new Cookies();

export function APISecuredAxios() {
  const APIAxios = axios.create({
    baseURL: K.App.BASE_API_URL,
  });
  APIAxios.defaults.headers.post["Content-Type"] = "application/json";
  APIAxios.defaults.headers.common["Authorization"] = cookies.get(
    K.App.API_TOKEN
  );
  return APIAxios;
}

// Check if logged in
export function isAuthenticated() {
  if (cookies.get(K.App.API_TOKEN)) {
    return true;
  } else {
    return false;
  }
}
