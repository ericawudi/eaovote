import { useMutation } from "react-query";
import { APISecuredAxios } from "../libs/axios/securedAxios";

const API_METHODS = { UPDATE: "UPDATE", DELETE: "DELETE" };

const postData = ({ url, data }) => APISecuredAxios().post(url, data);
const deleteData = ({ url, id }) => APISecuredAxios().delete(url, id);
const updateData = ({ url, data }) => APISecuredAxios().put(url, data);

export default function useRQMutation({ method, onSuccess, onError }) {
  let apiRequest = postData;
  if (method === API_METHODS.UPDATE) apiRequest = updateData;
  if (method === API_METHODS.DELETE) apiRequest = deleteData;

  return useMutation(apiRequest, {
    onSuccess: onSuccess,
    onError: onError,
  });
}

const updateQueryCacheWithNewActor = (cache, actor) => ({
  ...cache,
  data: {
    ...cache.data,
    data: [...cache.data.data, actor],
  },
});
const removeActorFromQueryCache = (cache, actorId) => ({
  ...cache,
  data: {
    ...cache.data,
    data: cache.data.data.filter((actor) => actor.id !== actorId),
  },
});

export { API_METHODS, updateQueryCacheWithNewActor, removeActorFromQueryCache };
