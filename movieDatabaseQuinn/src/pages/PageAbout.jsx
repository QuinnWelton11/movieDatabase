import tmdbLogo from '../images/tmdb-logo.svg';
import "./PageAbout.css";

function PageAbout() {
  return (
    <main className="about-page">
      <section className="about-content">
        <h1>About This App</h1>
        <p>
          This movie browser allows users to explore trending, top-rated, and upcoming films using data from The Movie Database (TMDb). You can view movie details, release dates, ratings, and even mark your favorites.
        </p>
        {/* paragraph is AI generated. */}
      </section>

      <section className="attribution">
        <p>
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p><br></br>
        <img
          src={tmdbLogo}
          alt="TMDb Logo"
          className="tmdb-logo"
        />
      </section>
    </main>
  );
}

export default PageAbout