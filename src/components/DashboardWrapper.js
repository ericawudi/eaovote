import { useState } from "react";
import SideBarNav from "../layout/sidebar/SideBarNav";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarDrawer from "../layout/sidebar/sidebar-drawer";
import useScreenWidth from "../hooks/useScreenWidth";

const MINIMUM_WIDTH = 1160;
const styles = {
  menuContainer: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
    paddingLeft: "10px",
  },
};
export default function DashboardWrapper({ children }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const width = useScreenWidth();
  const showSidebar = width > MINIMUM_WIDTH;
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
          <div style={styles.menuContainer}>
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
