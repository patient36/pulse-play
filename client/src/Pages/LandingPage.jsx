import React, { useState } from "react";
import "../styles/landingpage.css";
import Hero from "../Components/Hero";
import SideBar from "../Components/SideBar";

const HomeHero = () => {
  return (
    <div className="hero-container">
      <SideBar isOpen={false} />
      <Hero />
    </div>
  );
};

export default HomeHero;
