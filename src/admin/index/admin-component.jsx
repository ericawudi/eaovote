import { Route, Routes } from "react-router-dom";
import Admins from "../admins/containers/admins";
import Competitions from "../competitons/containers/competitions";

const components = [
  { title: "Admins", url: "/admin-list", Component: Admins },
  { title: "Competitions", url: "/competitions", Component: Competitions },
];
export default function AdminComponent() {
  return (
    <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
      <Routes>
        {components.map(({ title, url, Component }) => (
          <Route key={title} path={url} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}
