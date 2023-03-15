import MainPageComponent from "../components/MainPageComponent";
import ContextProvider from "../components/ContextProvider";
import SideBarNav from "../components/SideBarNav";
import { Grid } from "@mui/material";

function Dashboard() {
  return (
    <ContextProvider>
      <Grid container direction="row">
        <Grid item sm={2} style={{ background: "green" }}>
          <SideBarNav />
        </Grid>
        <Grid item sm={10} style={{ background: "red", width: "100%" }}>
          <MainPageComponent />
        </Grid>
      </Grid>
    </ContextProvider>
  );
}

export default Dashboard;
