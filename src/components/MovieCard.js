import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import emptyPoster from "./../assets/img/istock-photo.jpg";
//Aos imports
import AOS from "aos";
import "aos/dist/aos.css";

const MovieCard = ({ movie }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link
      to={movie.title ? `/movie/${movie.id}` : `/tv/${movie.id}`}
      className=""
    >
      <div
        className="container-movie-card"
        key={movie.id}
        data-aos="flip-right"
      >
        <div className="img-movie-container">
          <img
            className="img-movie"
            src={
              movie.poster_path
                ? `${URL_IMAGE + movie.poster_path}`
                : emptyPoster
            }
          />
        </div>
        <p className="title-movie-card">
          {movie.title ? movie.title : movie.name}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
