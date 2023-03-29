import { Navigate, Outlet } from "react-router-dom";
import SideBarNav from "../../layout/sidebar/SideBarNav";
import { isAuthenticated } from "../../utils/auth";
import classes from "./PrivateRoutes.module.css";

function PrivateRoutes() {
  if (!isAuthenticated()) return <Navigate to={"/login"} replace />;
  return (
    <div className={classes.container}>
      <SideBarNav />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default PrivateRoutes;
