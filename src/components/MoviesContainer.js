import React, { Fragment } from "react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, URL_IMAGE }) => {
  return (
    <Fragment>
      <div className="container-movies">
        <div className="row-movies">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              URL_IMAGE={URL_IMAGE}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MoviesContainer;
