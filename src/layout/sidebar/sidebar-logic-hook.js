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

const ADMIN_NAVS = [
  "Competitions",
  "Categories",
  "Participants",
  "Reports",
  "Users",
].map((item) => ({ id: item, name: item }));

export default function useSidebarLogicHook() {
  const dispatch = useDispatch();
  const { competitions } = useSelector((state) => state.competitionSlice);
  const { isAdmin, authToken } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const getCompetions = async () => {
      const res = await fetchAllCompetionsAPIRequest(authToken);
      if (res.err) return console.log({ FETCH_FAILED: res.message });
      return dispatch(setCompetitons(res.data.data));
    };
    getCompetions();
  }, [dispatch, authToken]);

  const handleCategoryClick = async (id) => {
    dispatch(setCurrentCompetition(id));
    const res = await fetchAllCategoriesAPIRequest(authToken);
    if (res.err) return console.log({ FETCH_CATEGORIES_FAILED: res.message });
    return dispatch(setCategories(res.data.data));
  };

  const selectedNavItems = isAdmin ? ADMIN_NAVS : competitions;
  return { selectedNavItems, competitions, handleCategoryClick };
}
