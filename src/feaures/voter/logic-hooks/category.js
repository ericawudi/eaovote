import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";

export default function useCategoryLogicHook(categoryId) {
  const { isLoading, isError, data, error, refetch } = useFetch([
    "participants",
    "category",
    categoryId,
  ]);

  useEffect(() => {
    if (categoryId) {
      refetch();
    }
  }, [categoryId, refetch]);

  return {
    participants: data?.data,
    isLoading,
    isError,
    error,
  };
}
