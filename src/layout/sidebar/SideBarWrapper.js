import classes from "./sidebar.module.css";
import { IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../utils/auth";

function SideBarWrapper({ children }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className={classes.sidebar__wrapper}>
      <div>{children}</div>
      <h1 className={classes.sidebar__logout}>
        <Tooltip title="Logout">
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </h1>
    </div>
  );
}

export default SideBarWrapper;
