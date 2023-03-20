import axios from "axios";
import Cookies from "universal-cookie";

export const constants = {
  App: {
    BASE_API_URL: "http://54.187.241.43:3001",
    PRIVILEGE: "privilege",
    API_ACCESS: "access_level",
    API_TOKEN: "eaodesigns",
    API_COMMENT:
      "E.A.O Designs - 233543425046. Contact us for any kind of software related project. Mobile apps, Websites, Desktop Applications and Draphic Designs.",
  },
};

const cookies = new Cookies();

export default function APISecuredAxios() {
  const APIAxios = axios.create({
    baseURL: constants.App.BASE_API_URL,
  });
  APIAxios.defaults.headers.post["Content-Type"] = "application/json";
  APIAxios.defaults.headers.common["Authorization"] = cookies.get(
    constants.App.API_TOKEN
  );
  return APIAxios;
}

// Check if logged in
export function isAuthenticated() {
  if (cookies.get(constants.App.API_TOKEN)) {
    return true;
  } else {
    return true;
  }
}
