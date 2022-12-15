import React, { Fragment } from "react";

const Movies = ({ movies, selectMovie, URL_IMAGE }) => {
  return (
    <Fragment>
      {/* Contenedor de poster de peliculas actuales */}
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="col-md-2 mb-3 img-movie-container"
              onClick={() => selectMovie(movie)}
            >
              <img
                className="img-movie"
                src={`${URL_IMAGE + movie.poster_path}`}
              />
              <h4 className="text-center">{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
