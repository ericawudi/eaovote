import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

export default function useCategoriesLogicHook() {
  const [openedCategories, setOpenedCategories] = useState([]);

  const { competitionId } = useParams();

  const { isLoading, isError, data, error, refetch } = useFetch([
    "category",
    "competition",
    competitionId,
  ]);

  useEffect(() => {
    if (competitionId) {
      refetch();
    }
  }, [competitionId, refetch]);

  const showParticipants = (id) => setOpenedCategories((prev) => [...prev, id]);
  const hideParticipants = (id) =>
    setOpenedCategories((prev) => prev.filter((catId) => catId !== id));

  const isOpened = (id) => openedCategories.includes(id);

  const toggleShowParticipants = (id) => {
    const listOpened = isOpened(id);
    return listOpened ? hideParticipants(id) : showParticipants(id);
  };

  return {
    categories: data?.data,
    toggleShowParticipants,
    isOpened,
    isLoading,
    isError,
    error,
  };
}
