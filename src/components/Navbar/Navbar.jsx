import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="logo">UPC INC</h1>
      <div className="links">
        <p className="link">Home</p>
        <p className="link">Our services</p>
        <p className="link">About us</p>
        <p className="link">Register</p>
        <button className="btn">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
