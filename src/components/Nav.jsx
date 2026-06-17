import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/nav.css";
import logo from "../images/logo_final.png";
import { Link } from "react-router-dom";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">HOPE & HUMANITY TRUST</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/aboutus" onClick={() => setMenuOpen(false)}>
          About us
        </Link>
        <Link to="/teammember" onClick={() => setMenuOpen(false)}>
          Team Members
        </Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact us
        </Link>
        {/* <button className="donate-btn">Donate Now</button> */}
        <button
          className="member-btn"
          onClick={() => navigate("/membershipform")}
        >
          Be a Member
        </button>
      </div>
    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? "✕" : "☰"}
</div>
    </nav>
  );
};

export default Nav;
