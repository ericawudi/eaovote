import { useMutation } from "react-query";
import { APISecuredAxios } from "../utils/auth";

const logInUser = (data) => {
  console.log({ data });
  return APISecuredAxios().post(`/some-url`, data);
};

export const usePostData = () => {
  const result = useMutation("user-login", logInUser);
  return result;
};
