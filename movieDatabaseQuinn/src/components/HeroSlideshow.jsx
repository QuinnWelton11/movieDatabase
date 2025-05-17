import { useEffect, useState } from "react";
import { getPopularMovies, IMG_BASE } from "../utilities/api"; // adjust path as needed
import { formatDatePretty } from "../utilities/toolbelt";
import "./HeroSlideshow.css";

function HeroSlideshow() {
  const [backdrops, setBackdrops] = useState([]);
  const [current, setCurrent] = useState(0);

  // Fetch popular movies once
  useEffect(() => {
    getPopularMovies().then((data) => {
      const images = data.results
        .filter((movie) => movie.backdrop_path)
        .map((movie) => ({
          title: movie.title,
          date: movie.release_date,
          rating: movie.vote_average,
          backdrop: `${IMG_BASE}/original/${movie.backdrop_path}`,
        }));
      setBackdrops(images);
    });
  }, []);

  // Auto-advance slideshow every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backdrops.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backdrops]);

  if (!backdrops.length) return null;

  return (
    <section
      className="hero-slide"
      style={{
        backgroundImage: `url(${backdrops[current].backdrop})`,
      }}
    >
      <div className="slide-overlay">
        <div className="slide-content">
          <h1>{backdrops[current].title}</h1>
          <p>{formatDatePretty(backdrops[current].date)}</p>
          <p>{backdrops[current].rating.toFixed(1)}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSlideshow;
