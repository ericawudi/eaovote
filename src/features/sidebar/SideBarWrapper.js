import classes from "./sidebar.module.css";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { logUserOut } from "../../utils/helper";

function SideBarWrapper({ children }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    logUserOut();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className={classes.sidebar__wrapper} rtl={false}>
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
