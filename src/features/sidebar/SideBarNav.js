import { Menu, MenuItem } from "react-pro-sidebar";
import { useFetch } from "../../services/hooks/useFetch";
import Loader from "../../components/Loader";
import SideBarWrapper from "./SideBarWrapper";
import { NavLink } from "react-router-dom";

function SideBarNav() {
  const result = useFetch("competition");

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
      <Menu>
        <MenuItem style={{ textAlign: "center" }}>
          <h2>Admin</h2>
        </MenuItem>

        {result.data?.data.map((navItem) => {
          return (
            <nav key={navItem.id}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={`/${navItem.id}`}
              >
                {navItem.name}
              </NavLink>
            </nav>
          );
        })}
      </Menu>
    </SideBarWrapper>
  );
}

export default SideBarNav;
