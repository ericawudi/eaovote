import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import VoterDashboard from "./pages/userDashboard";
import AdminDashboard from "./pages/adminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/voter/*" element={<VoterDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/superadmin/*" element={<AdminDashboard />} />
        <Route path="/:competitionId" element={<VoterDashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
