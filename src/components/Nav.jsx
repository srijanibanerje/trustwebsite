import React, { useState } from "react";
import "../Css/nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>HopeTrust</h2>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/project">Our Projects</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact us</a>
        {/* <button className="donate-btn">Donate Now</button> */}
         <button className="member-btn">Be a Member</button>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Nav;