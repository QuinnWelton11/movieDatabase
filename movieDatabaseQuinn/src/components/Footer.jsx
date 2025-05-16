import { NavLink } from "react-router-dom";
import tmdbLogo from "../images/tmdb-logo.svg";
import reactLogo from "../images/react.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>🎬 MovieMatch &copy; {new Date().getFullYear()}</p>
          <p className="tag-line">Built with React and TMDb API</p>
        </div>

        <div className="footer-center">
          <NavLink to="/" className="footer-link">
            Home
          </NavLink>
          <NavLink to="/about" className="footer-link">
            About
          </NavLink>
          <NavLink to="/favorites" className="footer-link">
            Favorites
          </NavLink>
        </div>

        <div className="footer-right">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tmdbLogo} alt="TMDb" className="tmdb-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
