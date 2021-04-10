import * as React from "react";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    if (menuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <header className="header">
      <div className="nav-bar ubuntu">
        <div className="container">
          <div className="logo">
            <a href="#">Portfo</a>
            <span>lio</span>
          </div>
          <ul className={`menu ${menuOpen === true ? "active" : ""}`}>
            <li>
              <a href="#home">Homeaaa</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#teams">Teams</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="menu-btn" onClick={toggleMenu}>
            {/* {menuOpen ? (<i className="fas fa-times"/>) : (<i className="fas fa-bars"/>)} */}

            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
