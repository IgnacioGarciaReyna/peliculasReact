import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, URL_IMAGE }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="col-md-2 mb-3 img-movie-container"
    >
      <div key={movie.id}>
        <img className="img-movie" src={`${URL_IMAGE + movie.poster_path}`} />
        <h4 className="text-center">{movie.title}</h4>
      </div>
    </Link>
  );
};

export default Movie;
