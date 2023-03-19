import { Menu, MenuItem } from "react-pro-sidebar";
// import { useFetch } from "../../services/hooks/useFetch";
import Loader from "../../components/Loader";
import SideBarWrapper from "./SideBarWrapper";
import { NavLink } from "react-router-dom";
import classes from "./sidebar.module.css";
import useSidebarLogicHook from "./sidebar-logic-hook";

function SideBarNav() {
  // const result = useFetch("competition");
  const { competitions, handleCategoryClick } = useSidebarLogicHook();

  const result = { isLoading: false, isError: false };

  if (result.isLoading) {
    return (
      <SideBarWrapper>
        <Loader fetching="competitions" />
      </SideBarWrapper>
    );
  }
  if (result.isError) {
    return <SideBarWrapper>{result.error.message}</SideBarWrapper>;
  }

  return (
    <SideBarWrapper>
      <Menu className={classes.sidebar__nav}>
        <h2 className={classes.sidebar__title}>Admin</h2>

        {competitions.map((navItem) => {
          return (
            <NavLink
              key={navItem.id}
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/${navItem.id}`}
              onClick={() => handleCategoryClick(navItem.id)}
            >
              {navItem.name}
            </NavLink>
          );
        })}
      </Menu>
    </SideBarWrapper>
  );
}

export default SideBarNav;
