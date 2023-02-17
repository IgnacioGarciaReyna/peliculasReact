import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Genres from "./Genres";
import MoviesContainer from "./MoviesContainer";
import Stars from "./Stars";
import Trailer from "./Trailer";

const MoviePage = ({ IMAGE_PATH }) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";
  //Variables de estado
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  const { category, id } = useParams();

  //Petición de un solo objeto para mostrar en reproductor de video
  const fetchMovie = async (category, id) => {
    const { data } = await axios.get(`${API_URL}/${category}/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovie(data);
  };

  useEffect(() => {
    fetchMovie(category, id);
  }, [id, category]);

  // console.log(movie);
  return (
    <div className="home-container">
      <div
        className="movie-page-container"
        style={{
          backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
        }}
      >
        <div className="background-cover">
          <div className="movie-title-container">
            <p className="home-movie-title">
              {category === "movie" ? movie.title : movie.name}
            </p>
            <Stars vote_average={movie.vote_average} />
            <Genres genres={movie.genres} />
          </div>
          <p>{movie.tagline}</p>
          <p>
            Release date:
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </p>
          {movie.number_of_episodes ? (
            <div>
              <p>number_of_episodes: {movie.number_of_episodes}</p>{" "}
              <p>number_of_seasons: {movie.number_of_seasons} </p>
            </div>
          ) : null}
          {movie.created_by ? (
            <div className="creators">
              <Cast title={"Creators"} cast={movie.created_by} />
            </div>
          ) : null}
          <div className="overview-container">
            <p className="overview">{movie.overview}</p>
          </div>
          <Cast
            category={category}
            id={id}
            API_URL={API_URL}
            API_KEY={API_KEY}
          />
        </div>
      </div>
      <p>Trailer</p>
      <div className="trailer-container">
        <Trailer category={category} id={id} />
      </div>
      <MoviesContainer
        title={`Related to "${movie.title || movie.name}"`}
        moviesType={`/${category}/${id}/recommendations`}
        searchKey={""}
      />
    </div>
  );
};

export default MoviePage;
