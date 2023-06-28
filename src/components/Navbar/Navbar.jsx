import React from "react";
import "./Navbar.css";

const Navbar = ({ nav, isLoggedIn }) => {
  return (
    <div className="nav">
      <h1 className="logo">UPC INC</h1>
      <div className="links">
        <p className="link" onClick={() => nav("/")}>
          Home
        </p>
        <a href="#services">
          <p className="link" onClick={() => nav("/#services")}>
            Our services
          </p>
        </a>
        <a href="#about">
          <p className="link" onClick={() => nav("/#about")}>
            About us
          </p>
        </a>
        {isLoggedIn === true && (
          <p className="link" onClick={() => nav("/profile")}>
            My Profile
          </p>
        )}

        {isLoggedIn === false && (
          <p className="link" onClick={() => nav("/register")}>
            Register
          </p>
        )}
        {isLoggedIn === false && (
          <button className="btn" onClick={() => nav("/login")}>
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
