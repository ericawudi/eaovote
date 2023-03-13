import MainPageComponent from "../components/MainPageComponent";
import ContextProvider from "../components/ContextProvider";
import SideBarNav from "../components/SideBarNav";

function Dashboard() {
  return (
    <ContextProvider>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <SideBarNav />
        <MainPageComponent />
      </div>
    </ContextProvider>
  );
}

export default Dashboard;
