import { useQuery } from "react-query";
import { APISecuredAxios } from "../../utils/auth";
import { Constants as K } from "../../utils/constants";

const fetchData = ({ queryKey }) => {
  if (Array.isArray(queryKey) && queryKey.length > 1) {
    return APISecuredAxios().get(
      `${K.App.BASE_API_URL}/${queryKey[0]}/${queryKey[1]}`
    );
  }
  return APISecuredAxios().get(`${K.App.BASE_API_URL}/${queryKey[0]}`);
};

export const useFetch = (key) => {
  return useQuery(key, fetchData, {
    refetchOnWindowFocus: false,
  });
};
