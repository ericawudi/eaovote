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
