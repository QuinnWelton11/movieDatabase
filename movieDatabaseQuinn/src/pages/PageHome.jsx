import { useEffect } from "react";
import { useState } from "react";
import {
  getPopularMovies,
  getNowPlaying,
  getTopRated,
  getUpcoming,
} from "../utilities/api";
import MovieCard from "../components/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PageHome.css";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  const [nowPlaying, setNowPlaying] = useState([]);

  const [topRated, setTopRated] = useState([]);

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    getNowPlaying()
      .then((data) => {
        console.log(data);
        setNowPlaying(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    getTopRated()
      .then((data) => {
        console.log(data);
        setTopRated(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    getUpcoming()
      .then((data) => {
        console.log(data);
        setUpcoming(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    arrows: true,
    dots: true,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <main id="home">
      <h2>Popular Movies</h2>
      <div className="slider-section">
        <Slider {...settings}>
          {popularMovies.map((movieData) => (
            <div key={movieData.id} className="movie-cards popular">
              <MovieCard movieData={movieData} />
            </div>
          ))}
        </Slider>
      </div>

      <h2>Now Playing</h2>
      <div className="slider-section">
        <Slider {...settings}>
          {nowPlaying.map((movieData) => (
            <div key={movieData.id} className="movie-cards nowplaying">
              <MovieCard movieData={movieData} />
            </div>
          ))}
        </Slider>
      </div>

      <h2>Top Rated</h2>
      <div className="slider-section">
        <Slider {...settings}>
          {topRated.map((movieData) => (
            <div key={movieData.id} className="movie-cards toprated">
              <MovieCard movieData={movieData} />
            </div>
          ))}
        </Slider>
      </div>

      <h2>Upcoming</h2>
      <div className="slider-section">
        <Slider {...settings}>
          {upcoming.map((movieData) => (
            <div key={movieData.id} className="movie-cards toprated">
              <MovieCard movieData={movieData} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

export default PageHome;
