import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="header-bar">
      <div className="header-logo">
        <a href="/">🎬</a>
      </div>
      <div className="header-center"></div>
      <div className="header-toggle">
        <Hamburger toggled={isOpen} toggle={setOpen} size={32} color="#fff" />
      </div>

      {isOpen && (
        <div className="header-menu">
          <ul>
            <li>
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navLink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className="navLink">
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <div className="nav-links">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/about" className="navLink">
          About
        </NavLink>
        <NavLink to="/favorites" className="navLink">
          Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
