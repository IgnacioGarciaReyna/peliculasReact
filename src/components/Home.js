import React from "react";

const Home = ({ movies, IMAGE_PATH }) => {
  console.log(movies);

  return (
    <div className="home-container">
      {movies[0] ? (
        <div
          className="home-movie-container"
          style={{
            backgroundImage: `url("${IMAGE_PATH}${movies[0].backdrop_path}")`,
          }}
        >
          <p>{movies[0].title} </p>
          <p>{movies[0].overview}</p>
          <p>{movies[0].release_date}</p>
          <img
            className="home-movie-poster"
            src={`${IMAGE_PATH}${movies[0].poster_path}`}
            alt=""
          />
          <div>
            <button>Ver ficha</button>
            <button>Trailer</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
