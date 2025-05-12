import { useEffect } from "react"
import { useState } from "react"
import { getPopularMovies } from "../utilities/api"
import MovieCard from "../components/MovieCard";
import "./PageHome.css";

function PageHome() {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getPopularMovies()
        .then((data) => {
            console.log(data);
            setPopularMovies(data.results);
        })
        .catch((error) => {
            alert(error)
        });
    }, []);

  return (
    <main id="home">
        <h2>Popular Movies</h2>
        <section className="movie-cards popular">
            {popularMovies.map((movieData) => {
                return <MovieCard key={movieData.id} movieData={movieData} />
            })}
        </section>
    </main>
  );
}

export default PageHome