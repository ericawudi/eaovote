import { URLS } from "../../utils/constants/urls";
import { APISecuredAxios } from "./securedAxios";

function makeGetRequest(url) {
  return async (authToken, ...paths) => {
    try {
      const subUrl = paths.reduce((res, cur) => res + cur, "");

      const endpoint = URLS.BASE_API_URL + url + subUrl;
      const { data } = await APISecuredAxios().get(endpoint, {
        headers: { Authorization: authToken },
      });
      return data;
    } catch (err) {
      return { err: true, message: err.message };
    }
  };
}
function makePostRequest(url, data) {
  return async () => {
    try {
      const endpoint = URLS.BASE_API_URL + url;
      const response = await APISecuredAxios().post(endpoint, data);
      return { err: false, data: response.data };
    } catch (err) {
      return { err: true, data: err.response.data };
    }
  };
}

export { makeGetRequest, makePostRequest };
