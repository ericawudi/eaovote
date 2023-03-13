import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:competitionId" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
