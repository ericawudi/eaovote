import APISecuredAxios from "./config";

const BASE_URL = "http://54.187.241.43:3001";

function makeGetRequest(url) {
  return async (authToken, ...paths) => {
    try {
      const subUrl = paths.reduce((res, cur) => res + cur, "");
      const endpoint = BASE_URL + url + subUrl;
      const { data } = await APISecuredAxios().get(endpoint, {
        headers: { Authorization: authToken },
      });
      return data;
    } catch (err) {
      return { err: true, message: err.message };
    }
  };
}
function makePostRequest(url, payload) {
  return async () => {
    try {
      const { authToken, data } = payload;
      const endpoint = BASE_URL + url;
      const response = await APISecuredAxios().post(endpoint, data, {
        headers: { Authorization: authToken },
      });
      return { err: false, data: response.data };
    } catch (err) {
      return { err: true, data: err.response.data };
    }
  };
}

export { makeGetRequest, makePostRequest };
