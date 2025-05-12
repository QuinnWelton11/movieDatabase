import { useEffect, useState } from "react";
import "./PageSingleMovie.css";
import { getMovieById } from "../utilities/api";
import { useParams } from "react-router-dom";

function PageSingleMovie() {

    const [movieData, setMovieData] = useState();
    const {id} = useParams();

    useEffect(() => {
        getMovieById(id)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            alert(error);
        });
    }, []);

  return <main id="single-movie-page"></main>
  
}

export default PageSingleMovie;