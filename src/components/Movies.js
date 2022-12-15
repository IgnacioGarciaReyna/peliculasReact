import React, { Fragment } from "react";
import Movie from "./Movie";

const Movies = ({ movies, selectMovie, URL_IMAGE }) => {
  return (
    <Fragment>
      {/* Contenedor de poster de peliculas actuales */}
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <Movie movie={movie} selectMovie={selectMovie} URL_IMAGE={URL_IMAGE}/>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
