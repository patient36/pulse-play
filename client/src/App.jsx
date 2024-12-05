import React from "react";
import NavBar from "./Components/NavBar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import HotTracks from "./Pages/HotTracks";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hot-tracks" element={<HotTracks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
