import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // This can be removed if you're not using react-router-dom
import {ReactTyped} from "react-typed";
import ThemeContext from "../Darktheme/ThemeContext";
import "../Header/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`navsection ${darkMode ? "dark" : "light"}`}>
      <div className="navlogo" >
        <a href="#home" style={{ textDecoration: "none" }}>
          <ReactTyped 
            strings={["Tinu Kumar"]}
            typeSpeed={100}
            cursorChar="|"
            showCursor={false}
          />
        </a>
      </div>

      <div className={`navServices ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={closeMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="hamburger">
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "🌞" : "🌜"}
        </button>
        <div className="hambergermenu" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon style={{ fontSize: "30px" }} />
          ) : (
            <MenuIcon style={{ fontSize: "30px" }} />
          )}
        </div>
      </div>

      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </div>
  );
};

export default Header;
