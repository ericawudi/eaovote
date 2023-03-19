import APISecuredAxios, { constants } from "./config";

function makeGetRequest(url) {
  return async () => {
    try {
      const { data } = await APISecuredAxios().get(
        `${constants.App.BASE_API_URL}/${url}`
      );
      return { err: false, data };
    } catch (err) {
      return { err: true, message: err.message };
    }
  };
}

export { makeGetRequest };
