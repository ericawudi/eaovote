//set-up axios

import axios from "axios";
import Cookies from "universal-cookie";
import { Constants } from "../../utils/constants/main";
import { URLS } from "../../utils/constants/urls";

const cookies = new Cookies();

export function APISecuredAxios() {
  const APIAxios = axios.create({
    baseURL: URLS.BASE_API_URL,
  });
  APIAxios.defaults.headers.post["Content-Type"] = "application/json";
  APIAxios.defaults.headers.common["Amplify-Allow-Non-HTTPS"] = "true";
  APIAxios.defaults.headers.common["Authorization"] = cookies.get(
    Constants.Cookies.API_TOKEN_KEY
  );
  return APIAxios;
}
