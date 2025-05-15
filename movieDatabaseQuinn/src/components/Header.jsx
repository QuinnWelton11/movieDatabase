import { NavLink } from "react-router-dom"
import "./header.css";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Header() {

    const [isOpen, setOpen] = useState(false); 

  return (
    <header>
        <div className="header-bar">
            <span id="logo">🎬</span>
            <div className="mobile-menu-toggle">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
        <nav className={isOpen ? "open" : ""}>
            <ul>
                <li><NavLink className="navlink" to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
                <li><NavLink className="navlink" to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
                <li><NavLink className='navlink' to="/favorites" onClick={() => setOpen(false)}>Favorites</NavLink></li>
            </ul>
         </nav>
    </header>
  )
}

export default Header