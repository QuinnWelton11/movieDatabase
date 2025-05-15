import { useEffect } from "react"
import { useState } from "react"
import { getPopularMovies, getNowPlaying, getTopRated, getUpcoming } from "../utilities/api"
import MovieCard from "../components/MovieCard";
import "./PageHome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function PageHome() {

    const [popularMovies, setPopularMovies] = useState([])

    const [nowPlaying, setNowPlaying] = useState([])

    const [topRated, setTopRated] = useState([]);
    
    const [upcoming, setUpcoming] = useState([]);

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

    useEffect(() => {
        getNowPlaying()
        .then((data) => {
            console.log(data);
            setNowPlaying(data.results);
        })
        .catch((error) => {
            alert(error)
        });
    }, []);

    useEffect(() => {
        getTopRated()
        .then((data) => {
            console.log(data);
            setTopRated(data.results);
        })
        .catch((error) => {
            alert(error)
        });
    }, []);

    useEffect(() => {
        getUpcoming()
        .then((data) => {
            console.log(data);
            setUpcoming(data.results);
        })
        .catch((error) => {
            alert(error)
        });
    }, []);
    
    
        const settings = {

            className: "center",
            infinite: true,
            centerPadding: "60px",
            arrows: true,
            dots: false,
            slidesToShow: 5,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
            afterChange: function(index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
            }

        };
 
  return (
    <main id="home">
        <h2>Popular Movies</h2>
        <Slider {...settings}>
            {popularMovies.map((movieData) => (
                <div key={movieData.id} className="movie-cards popular">
                    <MovieCard movieData={movieData} />
                </div>
            ))}
        </Slider>

        <h2>Now Playing</h2>
        <Slider {...settings}>
            {nowPlaying.map((movieData) => (
                <div key={movieData.id} className="movie-cards nowplaying">
                    <MovieCard movieData={movieData} />
                </div>
            ))}
        </Slider>

        <h2>Top Rated</h2>
        <Slider {...settings}>
            {topRated.map((movieData) => (
                <div key={movieData.id} className="movie-cards toprated">
                    <MovieCard movieData={movieData} />
                </div>
            ))}
        </Slider>

        <h2>Upcoming</h2>
        <Slider {...settings}>
            {upcoming.map((movieData) => (
                <div key={movieData.id} className="movie-cards toprated">
                    <MovieCard movieData={movieData} />
                </div>
            ))}
        </Slider>
      
    </main>
  );
}

export default PageHome