import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function PrivateRoutes() {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export default PrivateRoutes;
