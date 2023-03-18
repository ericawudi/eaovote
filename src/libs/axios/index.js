import APISecuredAxios, { constants } from "./config";

function makeGetRequest(url) {
  return APISecuredAxios().get(`${constants.App.BASE_API_URL}/${url}`);
}

export { makeGetRequest };
