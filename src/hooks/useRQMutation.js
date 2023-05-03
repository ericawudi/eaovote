import { useMutation } from "react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

export const METHODS = { PATCH: "PATCH", DELETE: "DELETE" };

const postData = (url, data) => APISecuredAxios().post(url, data);
const deleteData = (url, id) => APISecuredAxios().delete(url, id);
const updateData = (url, data) => APISecuredAxios().patch(url, data);

export const useRQMutation = ({ method, onSuccess, onError, onSettled }) => {
  let apiRequest = postData;
  if (method === METHODS.PATCH) apiRequest = updateData;
  if (method === METHODS.DELETE) apiRequest = deleteData;

  return useMutation(apiRequest, {
    onSuccess: onSuccess,
    onError: onError,
    onSettled: onSettled,
  });
};
