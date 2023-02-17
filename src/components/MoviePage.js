import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Genres from "./Genres";
import Providers from "./Providers";
import Stars from "./Stars";
import Trailer from "./Trailer";

const MoviePage = ({
  movie,
  fetchMovie,
  IMAGE_PATH,
  trailer,
  API_KEY,
  API_URL,
  setMovies,
}) => {
  const [providers, setProviders] = useState({});
  const { category, id } = useParams();

  const fetchRecomendations = async (category, id) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${category}/${id}/recommendations`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovies(results);
  };

  const fetchProviders = async (id) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/${id}/watch/providers`, {
      params: {
        api_key: API_KEY,
      },
    });

    setProviders(results);
  };

  fetchMovie(category, id);
  fetchRecomendations(category, id);
  fetchProviders(id);

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
              {category == "movie" ? movie.title : movie.name}
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
          <Providers providers={providers} />
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
        <Trailer trailer={trailer} />
      </div>
    </div>
  );
};

export default MoviePage;
