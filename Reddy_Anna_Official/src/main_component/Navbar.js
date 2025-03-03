
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../image/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({ service: false, platforms: false, rules: false });

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle submenu open/close (updated for mobile support)
  const toggleSubmenu = (submenu) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="home">HOME</Link>
          </li>

          {/* Service Dropdown */}
          <li className="submenu-container">
            <Link to="service"><button className="submenu-toggle" onClick={() => toggleSubmenu("service")}>
              Service ▾
            </button></Link>
            {submenuOpen.service && (
              <ul className="submenu">
                <li><Link to="reddyAnnalogin">Reddy Anna Login</Link></li>
                <li><Link to="cricket">Cricket Betting</Link></li>
                <li><Link to="football">Football Betting</Link></li>
                <li><Link to="horseRace">Horse Race Betting</Link></li>
                <li><Link to="tennis">Tennis Betting</Link></li>
                <li><Link to="indianCard">Indian Card Games</Link></li>
                <li><Link to="casino">Casino</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="about">About Us</Link></li>
          <li><Link to="sport">Sports ID</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="blog">Blog</Link></li>

          {/* Rules Dropdown */}
          <li className="submenu-container">
            <button className="submenu-toggle" onClick={() => toggleSubmenu("rules")}>
              Rules ▾
            </button>
            {submenuOpen.rules && (
              <ul className="submenu">
                <li><Link to="policy">Privacy Policy</Link></li>
                <li><Link to="termsAndcondition">Terms and Conditions</Link></li>
                <li><Link to="disclaimer">Disclaimer</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Overlay to close menu on click */}
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
      </nav>
    </div>
  );
};

export default Navbar;
