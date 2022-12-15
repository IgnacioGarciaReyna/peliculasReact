import React from "react";

const Movie = ({ movie, selectMovie, URL_IMAGE }) => {
  return (
    <div
      key={movie.id}
      className="col-md-2 mb-3 img-movie-container"
      onClick={() => selectMovie(movie)}
    >
      <img className="img-movie" src={`${URL_IMAGE + movie.poster_path}`} />
      <h4 className="text-center">{movie.title}</h4>
    </div>
  );
};

export default Movie;
