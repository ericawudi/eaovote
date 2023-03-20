import { Menu } from "react-pro-sidebar";
// import { useFetch } from "../../services/hooks/useFetch";
import Loader from "../../components/Loader";
import SideBarWrapper from "./SideBarWrapper";
import { NavLink } from "react-router-dom";
import classes from "./sidebar.module.css";
import useSidebarLogicHook from "./sidebar-logic-hook";

function SideBarNav() {
  // const result = useFetch("competition");
  const { selectedNavItems, handleCategoryClick } = useSidebarLogicHook();

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

        {selectedNavItems.map((navItem) => {
          return (
            <NavLink
              key={navItem.id}
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/${navItem.id.toLowerCase()}`}
              onClick={() => handleCategoryClick(navItem.id)}
            >
              <p className={classes.sidebar__nav_item}>{navItem.name}</p>
            </NavLink>
          );
        })}
      </Menu>
    </SideBarWrapper>
  );
}

export default SideBarNav;
