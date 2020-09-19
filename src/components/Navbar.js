import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <MdFingerprint className="navbar-icon" />
          Lavish
        </Link>
        <div className="nav-menu-container">
          <div className="menu-icon" onClick={handleClick}>
            {isClicked ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
            <li className="menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
