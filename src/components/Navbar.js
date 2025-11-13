import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container nav-container">
        <div className="nav-logo d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
          <span className="nav-title ms-2">My Portfolio</span>
        </div>

        <ul className="nav-links d-flex">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
