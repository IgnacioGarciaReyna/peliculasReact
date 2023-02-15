import React, { useState } from "react";
import Stars from "./Stars";

const Home = ({ movies, IMAGE_PATH }) => {
  console.log(movies);
  return (
    <div className="home-container">
      {movies[0] ? (
        <div
          className="movie-page-container"
          style={{
            backgroundImage: `url("${IMAGE_PATH}${movies[0].backdrop_path}")`,
          }}
        >
          <div className="background-cover">
            <p>{movies[0].release_date}</p>
            <p className="home-movie-title">{movies[0].title} </p>
            <img
              className="home-movie-poster"
              src={`${IMAGE_PATH}${movies[0].poster_path}`}
              alt=""
            />
            <Stars vote_average={movies[0].vote_average} />
            <div className="overview-container">
              <p className="home-overview">{movies[0].overview}</p>
            </div>
            <div>
              <button>Ver ficha</button>
              <button>Trailer</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
