import { useEffect, useState } from "react";
import "./PageSingleMovie.css";
import { getMovieById, IMG_BASE } from "../utilities/api";
import { useParams } from "react-router-dom";
import { formatDatePretty } from "../utilities/toolbelt";
import FavoriteButton from "../components/FavoriteButton";

function PageSingleMovie() {

    const [movieData, setMovieData] = useState();
    const {id} = useParams();

    useEffect(() => {
        getMovieById(id)
        .then((data) => {
            console.log(data);
            setMovieData(data);
        })
        .catch((error) => {
            alert(error);
        });
    }, []);

  return <main id="single-movie-page">
    {movieData && (
        <>
            <div className="backdrop-container">
                <img 
                    className="backdrop" 
                    src={`${IMG_BASE}/w1280/${movieData.backdrop_path}`} 
                    alt="" 
                />
            </div>
            <h1>{movieData.title}</h1>
            <h2>Release Date: {formatDatePretty(movieData.release_date)}</h2>
            <FavoriteButton movieData={movieData} />
            <p>{movieData.overview}</p>
        </>
    )}
  </main>
  
}

export default PageSingleMovie;