import React, { Fragment } from "react";
import Movie from "./Movie";

const Movies = ({ movies, URL_IMAGE }) => {
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <Movie
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

export default Movies;
