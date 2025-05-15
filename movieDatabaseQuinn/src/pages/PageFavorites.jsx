import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./PageFavorites.css";

function PageFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="favorites-page">
      <h1>Your Favourites</h1>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      ) : (
        <p className="no-favorites">You haven't added any favourites yet.</p>
      )}
    </main>
  );
}

export default PageFavorites;
