import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MainRoot from "./roots/MainRoot.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoot />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
