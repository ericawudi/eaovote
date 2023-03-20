import { Route, Routes } from "react-router-dom";
import Admins from "../admins/containers/admins";

const components = [{ title: "Admins", url: "/", Component: Admins }];
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
