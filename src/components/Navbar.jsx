import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      {/* Logo */}
      <div className="nav-left">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className={menuOpen ? "nav-center open" : "nav-center"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        {/* Resume Dropdown */}
        <li className="dropdown">
          <a href="#resume">Resume ▾</a>
          <ul className="dropdown-menu">
            <li>
              <a href={resume} download>
                Download CV
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </li>

        {/* Gallery Mega Menu */}
        <li className="mega">
          <a href="#gallery">Gallery ▾</a>
          <div className="mega-menu">
            <a href="#web">Web Design</a>
            <a href="#ui">UI Projects</a>
            <a href="#apps">Apps</a>
            <a href="#graphics">Graphics</a>
          </div>
        </li>

        {/* Blog Dropdown */}
        <li className="dropdown">
          <a href="#blog">Blog ▾</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#tech">Tech</a>
            </li>
            <li>
              <a href="#tutorials">Tutorials</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        className={menuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
