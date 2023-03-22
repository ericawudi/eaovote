import { Menu } from "react-pro-sidebar";
import { Grid } from "@mui/material";
// import { useFetch } from "../../services/hooks/useFetch";
import Loader from "../../components/Loader";
import SideBarWrapper from "./SideBarWrapper";
import { NavLink } from "react-router-dom";
import PollIcon from "@mui/icons-material/Poll";
import classes from "./sidebar.module.css";
import useSidebarLogicHook from "./sidebar-logic-hook";

function SideBarNav() {
  // const result = useFetch("competition");
  const { selectedNavItems, handleCategoryClick } = useSidebarLogicHook();
  console.log({ selectedNavItems });

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

        {selectedNavItems.map(({ name, id, Icon }) => {
          return (
            <NavLink
              key={id}
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/${id}`}
              onClick={() => handleCategoryClick(id)}
            >
              <div className={classes.sidebar__nav_item}>
                {!!Icon ? <Icon /> : <PollIcon />}
                <p>{name}</p>
              </div>
            </NavLink>
          );
        })}
      </Menu>
    </SideBarWrapper>
  );
}

export default SideBarNav;
