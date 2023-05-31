import { useQuery, useQueries } from "@tanstack/react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

const DEFAULT_QUERY_OPTIONS = {
  refetchOnWindowFocus: false,
  cacheTime: 30000,
  staleTime: 30000,
};

const fetchData = ({ queryKey }) => {
  if (Array.isArray(queryKey) && queryKey.length > 1) {
    const url = queryKey.join("/");
    return APISecuredAxios().get(url);
  }
  return APISecuredAxios().get(queryKey[0]);
};

const useFetch = (queryKey, enabled = false) => {
  return useQuery({
    queryKey,
    enabled,
    queryFn: fetchData,
    ...DEFAULT_QUERY_OPTIONS,
  });
};

function useFetchParallelData(parentKey, arr) {
  const queries = arr.map(({ id }) => {
    const queryKey = [parentKey, id];
    return {
      queryKey,
      queryFn: fetchData,
    };
  });
  return useQueries({ queries });
}

const getActorList = (data) => data?.data?.data ?? [];

export { useFetchParallelData, getActorList, useFetch };
