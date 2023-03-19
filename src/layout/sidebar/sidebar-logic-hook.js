import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllCompetionsAPIRequest,
  fetchAllCategoriesAPIRequest,
} from "../../services/user/competitions";
import {
  setCurrentCompetition,
  setCompetitons,
  setCategories,
} from "../../libs/redux/actions/competitions";

export default function useSidebarLogicHook() {
  const dispatch = useDispatch();
  const { competitions } = useSelector((state) => state.competitionSlice);

  useEffect(() => {
    const getCompetions = async () => {
      const res = await fetchAllCompetionsAPIRequest();
      if (res.err) return console.log({ FETCH_FAILED: res.message });
      return dispatch(setCompetitons(res.data));
    };
    getCompetions();
  }, [dispatch]);

  const handleCategoryClick = async (id) => {
    dispatch(setCurrentCompetition(id));
    const res = await fetchAllCategoriesAPIRequest();
    if (res.err) return console.log({ FETCH_CATEGORIES_FAILED: res.message });
    return dispatch(setCategories(res.data));
  };

  return { competitions, handleCategoryClick };
}
