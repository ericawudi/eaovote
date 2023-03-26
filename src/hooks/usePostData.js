import { useMutation } from "react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

const postUserData = ({ url, data }) => {
  return APISecuredAxios().post(url, data);
};
export const usePostData = (onSuccess, onError) => {
  return useMutation(postUserData, {
    onSuccess: onSuccess,
    onError: onError,
  });
};
