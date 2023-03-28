import { useQuery } from "react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

const fetchData = ({ queryKey }) => {
  if (Array.isArray(queryKey) && queryKey.length > 1) {
    return APISecuredAxios().get(`/${queryKey[0]}/${queryKey[1]}`);
  }
  return APISecuredAxios().get(`/${queryKey[0]}`);
};

export const useFetch = (key) => {
  return useQuery(key, fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
    cacheTime: 30000,
    staleTime: 30000,
  });
};
