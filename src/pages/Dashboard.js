import { useState } from "react";
import MainPageComponent from "../layout/dashboard/MainPageComponent";
import ContextProvider from "../layout/dashboard/ContextProvider";
import SideBarNav from "../layout/sidebar/SideBarNav";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarDrawer from "../layout/sidebar/sidebar-drawer";
import useSreenWidth from "../utils/use-screen-width";

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
function Dashboard() {
  const [showDrawer, setShowDrawer] = useState(false);
  const width = useSreenWidth();
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
        <Grid
          item
          sm={gridSmValue}
          style={{ background: "red", width: "100%" }}
        >
          <MainPageComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
