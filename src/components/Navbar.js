import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i class="fa-regular fa-dog"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Dogs" className="nav-links" onClick={closeMobileMenu}>
              Dogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
