import APISecuredAxios, { constants } from "./config";

const BASE_URL = "http://54.187.241.43:3001";

function makeGetRequest(url) {
  return async () => {
    try {
      const endpoint = BASE_URL + url;
      const { data } = await APISecuredAxios().get(
        `${constants.App.BASE_API_URL}/${endpoint}`
      );
      return { err: false, data };
    } catch (err) {
      return { err: true, message: err.message };
    }
  };
}
function makePostRequest(url) {
  return async (data) => {
    try {
      const endpoint = BASE_URL + url;
      const response = await APISecuredAxios().post(endpoint, data);
      return { err: false, data: response.data };
    } catch (err) {
      return { err: true, data: err.response.data };
    }
  };
}

export { makeGetRequest, makePostRequest };
