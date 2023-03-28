// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import ADMIN_NAVS from "../../admin/index/admin-urls";
// import ADMIN_NAVS from "../../feaures/admin/index/admin-urls";
// import {
//   fetchAllCompetionsAPIRequest,
//   fetchAllCategoriesAPIRequest,
// } from "../../services/user/competitions";
// import {
//   setCurrentCompetition,
//   setCompetitons,
//   setCategories,
// } from "../../libs/redux/actions/competitions";

// export default function useSidebarLogicHook() {
//   const dispatch = useDispatch();
//   const { competitions } = useSelector((state) => state.competitionSlice);
//   const { isAdmin, authToken } = useSelector((state) => state.authSlice);

//   useEffect(() => {
//     const getCompetions = async () => {
//       const res = await fetchAllCompetionsAPIRequest(authToken);
//       if (res.err) return console.log({ FETCH_FAILED: res.message });
//       return dispatch(setCompetitons(res.data.data));
//     };
//     !isAdmin && getCompetions();
//   }, [dispatch, authToken, isAdmin]);

//   const handleCategoryClick = async (id) => {
//     dispatch(setCurrentCompetition(id));
//     const res = await fetchAllCategoriesAPIRequest(authToken, id);
//     if (res.err) return console.log({ FETCH_CATEGORIES_FAILED: res.message });
//     return dispatch(setCategories(res.data.data));
//   };

//   const selectedNavItems = isAdmin ? ADMIN_NAVS : competitions;
//   return { selectedNavItems, competitions, handleCategoryClick };
// }

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getLevelCookie, removeCookie } from "../../utils/auth";
import { routes } from "../../utils/constants/route";

export const useSidebarLogic = () => {
  const navigate = useNavigate();
  const level = getLevelCookie();

  const { isLoading, isError, data, error, refetch, isSuccess } = useFetch([
    "competition",
    "voter",
  ]);

  const handleLogout = () => {
    removeCookie();
    navigate("/login", {
      replace: true,
    });
  };

  let navItems = [];

  useEffect(() => {
    if (level === "voter") {
      refetch();
    }
  }, [level, refetch]);

  if (level === "admin") {
    navItems = routes.ADMIN;
  } else if (level === "superadmin") {
    navItems = routes.SUPERADMIN;
  }
  if (isSuccess) {
    navItems = data.data?.data;
  }

  return { isLoading, isError, data, error, navItems, handleLogout };
};
