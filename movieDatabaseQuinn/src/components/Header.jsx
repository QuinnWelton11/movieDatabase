import { NavLink } from "react-router-dom"
import "./header.css";

function Header() {
  return (
    <header>
        <span id="logo">Logo</span>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header