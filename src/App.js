import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import VoterDashboard from "./pages/user-dashboard";
import AdminDashboard from "./pages/admin-dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="*" element={<AdminDashboard />} />
        </Route>
        <Route path="/" element={<VoterDashboard />} />
        <Route path="/:competitionId" element={<VoterDashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
