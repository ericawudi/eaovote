import { useMutation } from "react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

const API_METHODS = { PATCH: "PATCH", DELETE: "DELETE" };

const postData = ({ url, data }) => APISecuredAxios().post(url, data);
// const deleteData = (url, id) => APISecuredAxios().delete(url, id);
// const updateData = (url, data) => APISecuredAxios().patch(url, data);

const useRQMutation = ({ method, onSuccess, onError }) => {
  // let apiRequest = postData;
  // if (method === API_METHODS.PATCH) apiRequest = updateData;
  // if (method === API_METHODS.DELETE) apiRequest = deleteData;

  return useMutation(postData, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export { API_METHODS, useRQMutation };
