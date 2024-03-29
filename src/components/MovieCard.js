import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import emptyPoster from "./../assets/img/istock-photo.jpg";

const MovieCard = ({ movie }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <Link
      to={movie.title ? `/movie/${movie.id}` : `/tv/${movie.id}`}
      onClick={window.scrollTo(0, 0)}
      className=""
    >
      <div className="container-movie-card" key={movie.id}>
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
