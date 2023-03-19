import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function useCategoryLogicHook() {
  const { categories } = useSelector((state) => state.competitionSlice);
  const [openedCategories, setOpenedCategories] = useState([]);

  const params = useParams();

  console.log({ params });

  const showParticipants = (id) => setOpenedCategories((prev) => [...prev, id]);
  const hideParticipants = (id) =>
    setOpenedCategories((prev) => prev.filter((catId) => catId !== id));

  const isOpened = (id) => openedCategories.includes(id);

  const toggleShowParticipants = (id) => {
    const listOpened = isOpened(id);
    return listOpened ? hideParticipants(id) : showParticipants(id);
  };

  return { categories, toggleShowParticipants, isOpened };
}
