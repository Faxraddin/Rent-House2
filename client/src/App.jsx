import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./pages/home";
import MainRoot from "./roots/MainRoot.jsx";

import Home from "./pages/Home Page/Home";
import AboutPage from './pages/About Page/About'
import OpportunitiesPage from './pages/Opportunities Page/Opportunities'
import LogIn from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoot />}>
          <Route index element={<Home />} />
          <Route path="/opportunities" element={<OpportunitiesPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;
