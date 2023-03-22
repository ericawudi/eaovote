import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ADMIN_NAVS from "../../admin/index/admin-nav-urls";
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
  const { isAdmin, authToken } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const getCompetions = async () => {
      const res = await fetchAllCompetionsAPIRequest(authToken);
      if (res.err) return console.log({ FETCH_FAILED: res.message });
      return dispatch(setCompetitons(res.data.data));
    };
    !isAdmin && getCompetions();
  }, [dispatch, authToken, isAdmin]);

  const handleCategoryClick = async (id) => {
    if (isAdmin) return;
    dispatch(setCurrentCompetition(id));
    const res = await fetchAllCategoriesAPIRequest(authToken, id);
    if (res.err) return console.log({ FETCH_CATEGORIES_FAILED: res.message });
    return dispatch(setCategories(res.data.data));
  };

  const selectedNavItems = isAdmin ? ADMIN_NAVS : competitions;
  return { selectedNavItems, competitions, handleCategoryClick };
}
