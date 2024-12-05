import React, { useState } from "react";
import "../styles/navbar.css";
import Logo from "./Logo";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo-container flex items-center justify-center ">
        <Logo size="30px" color="white" />
        <h1 className="ml-3 text-white">PulsePlay</h1>
      </div>
      <div className="search">
        <div className="home">
          <GrHomeRounded className="home-icon" onClick={() => {navigate("/")}} />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <IoSearch className="search-icon" />
        </div>
      </div>
      {loggedIn ? (
        <div className="user-name" onClick={toggleLogin}>
          <p className="user-initial">P</p>
        </div>
      ) : (
        <div className="accounts">
          <button className="sign-up text-gray-300"  onClick={() => {navigate("/register")}}>Sign up</button>
          <button className="login" onClick={() => {navigate("/login")}}>Log in</button>
        </div>
      )}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <div className={`nav-dropdown ${menuOpen ? "show" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Search</a>
          {loggedIn ? (
            <>
              <a href="#">Log out</a>
            </>
          ) : (
            <>
              <a href="#">Sign up</a>
              <a href="#">Log in</a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
