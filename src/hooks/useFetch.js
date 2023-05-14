import { useQuery } from "react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

const fetchData = ({ queryKey }) => {
  if (Array.isArray(queryKey) && queryKey.length > 1) {
    const url = queryKey.join("/");
    return APISecuredAxios().get(url);
  }
  return APISecuredAxios().get(queryKey[0]);
};

export const useFetch = (key, enabled = false) => {
  return useQuery(key, fetchData, {
    refetchOnWindowFocus: false,
    enabled,
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export const getActorList = (data) => data?.data?.data ?? [];
