import { Button } from "@mui/material";
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getLevelCookie } from "../../utils/auth";
import classes from "./sidebar.module.css";
import { useSidebarLogic } from "./useSidebarLogic";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function SideBarNav() {
  const [level] = useState(() => getLevelCookie());
  const { broken, toggleSidebar } = useProSidebar();
  const { isLoading, isError, navItems, handleLogout } = useSidebarLogic();

  function toggle() {
    toggleSidebar();
  }

  if (isLoading) {
    return (
      <div className={classes.comp_fetch}>
        <Loader fetching="competitions" />
      </div>
    );
  }
  if (isError) {
    return <div className={classes.comp_fetch_error}>Error fetching items</div>;
  }

  return (
    <div className={classes.container}>
      <Sidebar
        breakPoint="sm"
        collapsedWidth={0}
        transitionDuration={600}
        backgroundColor="#b9b9b9"
      >
        <div>
          <h2 className={classes.sidebar__title}>
            {level?.charAt(0).toUpperCase() + level?.slice(1)}
          </h2>
          <Menu className={classes.sidebar__nav}>
            {navItems?.map(({ name, Icon, id }) => {
              return (
                <NavLink
                  key={id}
                  className={({ isActive }) =>
                    isActive
                      ? classes.sidebar__active_link
                      : classes.sidebar__link
                  }
                  to={`/${level}/${id}`}
                  // onClick={() => handleCategoryClick(id)}
                >
                  <div className={classes.sidebar__nav_item}>
                    {!!Icon && <Icon />} <span>{name}</span>
                  </div>
                </NavLink>
              );
            })}
          </Menu>
        </div>
        <Button
          color="inherit"
          variant="contained"
          onClick={handleLogout}
          style={{ position: "fixed", bottom: "0px", width: "250px" }}
        >
          <LogoutIcon />
          Logout
        </Button>
      </Sidebar>
      {broken && <MenuIcon fontSize="medium" onClick={toggle} />}
    </div>
  );
}
export default SideBarNav;
