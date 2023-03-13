import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { logUserOut } from "../services/utils/helper";

function SideBarWrapper({ children }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    logUserOut();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    // <div>
    <Sidebar
      backgroundColor="rgba(212, 244, 244, 0.7)"
      rtl={false}
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <div>{children}</div>
      {/* <h1 id="logout" style={{ position: "absolute", bottom: 0 }}>
        Logout
      </h1> */}

      <h1 id="logout">
        <Tooltip title={"Logout"}>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </h1>
    </Sidebar>
    // </div>
  );
}

export default SideBarWrapper;
