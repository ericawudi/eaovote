// import { Route, Routes } from "react-router-dom";
// import Admins from "../admins/containers/admins";
// import Voters from "../voters/containers/voters";
// import Participants from "../participants/containers/participants";
// import Competitions from "../competitons/containers/competitions";
// import Categories from "../categories/containers/categories";
// import Reports from "../reports/containers/reports";

// const components = [
//   { title: "Admins", url: "admin-list", Component: Admins },
//   { title: "Voters", url: "voters", Component: Voters },
//   { title: "Participants", url: "participants", Component: Participants },
//   { title: "Competitions", url: "competitions", Component: Competitions },
//   { title: "Categories", url: "categories", Component: Categories },
//   { title: "Reports", url: "reports", Component: Reports },
// ];
export default function AdminComponent() {
  return (
    // <Routes>
    //   {components.map(({ title, url, Component }) => (
    //     <Route key={title} path={`/${url}`} element={<Component />} />
    //   ))}
    // </Routes>
    <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
      <h1>hello there</h1>
    </div>
    // <Routes key={"admin"}>
    //   <Route path="*" element={<Admins />} />
    // </Routes>
  );
}
