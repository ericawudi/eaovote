import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import VoterDashboard from "./pages/VoterDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Admins from "./feaures/admin/admins/containers/admins";
import Voters from "./feaures/admin/voters/containers/voters";
import Participants from "./feaures/admin/participants/containers/participants";
import Competitions from "./feaures/admin/competitons/containers/competitions";
import Categories from "./feaures/admin/categories/containers/categories";
import Reports from "./feaures/admin/reports/containers/reports";

// import Admins from "../admins/containers/admins";
// import Voters from "../voters/containers/voters";
// import Participants from "../participants/containers/participants";
// import Competitions from "../competitons/containers/competitions";
// import Categories from "../categories/containers/categories";
// import Reports from "../reports/containers/reports";

// const components = [
//   { title: "Admins", url: "/admin-list", Component: Admins },
//   { title: "Voters", url: "/voters", Component: Voters },
//   { title: "Participants", url: "/participants", Component: Participants },
//   { title: "Competitions", url: "/competitions", Component: Competitions },
//   { title: "Categories", url: "/categories", Component: Categories },
//   { title: "Reports", url: "/reports", Component: Reports },
// ];

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/voter">
          <Route index element={<VoterDashboard />} />
          <Route path=":competitionId" element={<VoterDashboard />} />
        </Route>
        <Route path="/admin">
          <Route index element={<AdminDashboard />} />
          <Route path="admin-list" element={<Admins />} />
          <Route path="voters" element={<Voters />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="categories" element={<Categories />} />
          <Route path="participants" element={<Participants />} />
          <Route path="report" element={<Reports />} />
        </Route>
        <Route path="/superadmin">
          <Route index element={<AdminDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
