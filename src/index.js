import React from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MenuPage from "./page/MenuPage";
import FormPage from "./page/FormPage";

const Layout = (props) => {
  return (
    <>
      <nav>
        <Link to="/">點我連到第一頁</Link>
        <Link to="/form" style={{ marginLeft: "20px" }}>
          點我連到第二頁
        </Link>
      </nav>
      {props.children}
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Layout/>
      <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/form" element={<FormPage />} />
      </Routes>
    </HashRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
