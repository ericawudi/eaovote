import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function PrivateRoutes() {
  if (!isAuthenticated()) return <Navigate to={"/login"} replace />;
  return <Outlet />;
}

export default PrivateRoutes;
