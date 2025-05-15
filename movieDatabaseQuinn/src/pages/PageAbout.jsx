import "./PageAbout.css";

function PageAbout() {
  return (
    <main className="about-page">
      <section className="about-content">
        <h1>About This App</h1>
        <p>
          This movie browser allows users to explore trending, top-rated, and upcoming films using data from The Movie Database (TMDb). You can view movie details, release dates, ratings, and even mark your favorites.
        </p>
      </section>

      <section className="attribution">
        <p>
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
        <img
          src="https://www.themoviedb.org/assets/1/v4/logos/primary-blue-4c6827d3d1a6f6a0f4f352e5c1ff7dfd2e2f3962f1c6b69736176b6b3c6f93db.svg"
          alt="TMDb Logo"
          className="tmdb-logo"
        />
      </section>
    </main>
  );
}

export default PageAbout