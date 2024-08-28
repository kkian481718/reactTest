import React from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MenuPage from "./page/MenuPage";
import FormPage from "./page/FormPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </HashRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
