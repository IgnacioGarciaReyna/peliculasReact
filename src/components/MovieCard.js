import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, URL_IMAGE }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="">
      <div className="container-movie-card" key={movie.id}>
        <img className="img-movie" src={`${URL_IMAGE + movie.poster_path}`} />
        <p className="title-movie-card">
          {movie.title ? movie.title : movie.name}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
