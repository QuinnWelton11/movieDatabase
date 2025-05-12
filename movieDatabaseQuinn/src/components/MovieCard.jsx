import { IMG_BASE } from "../utilities/api";
import { formatDatePretty } from "../utilities/toolbelt";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({movieData}) {
  return (
    <Link to={`/movie/${movieData.id}`}>
      <div className="movie-card">
          <img src={`${IMG_BASE}/w342/${movieData.poster_path}`} alt={movieData.overview} className="poster" />

          <div className="backdrop">
              <h2 className="title">{movieData.title}</h2>
              <h3 className="release">{formatDatePretty(movieData.release_date)}</h3>
              <span className="rating">
                  {movieData.vote_average.toFixed(1)}
              </span>
              <button className="favorite-btn">❤</button>
          </div>
      </div>
    </Link>
  )
}

export default MovieCard