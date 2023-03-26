import { useState } from "react";
import SideBarNav from "../../layout/sidebar/SideBarNav";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarDrawer from "../../layout/sidebar/sidebarDrawer";
import useScreenWidth from "../../hooks/useScreenWidth";
import { Constants as K } from "../../utils/constants/main";
import classes from "./dashboardWrapper.module.css";

export default function DashboardWrapper({ children }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const width = useScreenWidth();
  const showSidebar = width > K.MINIMUM_WIDTH;
  const gridSmValue = showSidebar ? 10 : 12;
  const toggleSidebar = () => setShowDrawer((prev) => !prev);

  return (
    <div style={{ height: "100vh" }}>
      <SidebarDrawer open={showDrawer} onClose={toggleSidebar}>
        <SideBarNav />
      </SidebarDrawer>
      <Grid container direction="row" sx={{ height: "100%" }}>
        {showSidebar ? (
          <Grid item sm={2} style={{ background: "green" }}>
            <SideBarNav />
          </Grid>
        ) : (
          <div className={classes.menuContainer}>
            <MenuIcon fontSize="large" onClick={toggleSidebar} /> Admin
          </div>
        )}
        <Grid item sm={gridSmValue} style={{ width: "100%" }}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
