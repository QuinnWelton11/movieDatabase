import { useEffect, useState } from "react";
import "./PageSingleMovie.css";
import { getMovieById, IMG_BASE, getCredits } from "../utilities/api";
import { useParams } from "react-router-dom";
import { formatDatePretty } from "../utilities/toolbelt";
import FavoriteButton from "../components/FavoriteButton";
import Slider from "react-slick";

function PageSingleMovie() {

    const [movieData, setMovieData] = useState();
    const [credits, setCredits] = useState();
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
        getCredits(id)
        .then((data) => {
            console.log("Credits:", data);
            setCredits(data);
        })
        .catch((error) => {
            alert("Error fetching credits");
            console.error(error);
        });
    }, [id]);

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
            },
        ],
    };

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

            <h2>Cast</h2>
            <Slider {...sliderSettings}>
            {credits.cast.slice(0, 10).map((actor) => (
                <div key={actor.id} className="credit-card">
                <img
                    src={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : "https://via.placeholder.com/185x278?text=No+Image"
                    }
                    alt={actor.name}
                />
                <p className="name">{actor.name}</p>
                <p className="role">{actor.character}</p>
                </div>
            ))}
            </Slider>

            <h2>Crew</h2>
            <Slider {...sliderSettings}>
            {credits.crew
                .filter((person) =>
                ["Director", "Writer", "Producer", "Screenplay"].includes(person.job)
                )
                .slice(0, 10)
                .map((crewMember) => (
                <div key={crewMember.id} className="credit-card">
                    <img
                    src={
                        crewMember.profile_path
                        ? `https://image.tmdb.org/t/p/w185${crewMember.profile_path}`
                        : "https://via.placeholder.com/185x278?text=No+Image"
                    }
                    alt={crewMember.name}
                    />
                    <p className="name">{crewMember.name}</p>
                    <p className="role">{crewMember.job}</p>
                </div>
                ))}
            </Slider>



        </>
    )}
  </main>
  
}

export default PageSingleMovie;