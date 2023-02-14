import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Genres from "./Genres";
import Providers from "./Providers";
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
  const [cast, setCast] = useState({});
  const { id } = useParams();

  const fetchRecomendations = async (id) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/${id}/recommendations`, {
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
  const fetchCast = async (id) => {
    const data = await axios.get(`${API_URL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });

    setCast(data.data.cast);
  };

  fetchMovie(id);
  fetchRecomendations(id);
  fetchProviders(id);
  fetchCast(id);

  return (
    <div className="home-container">
      <div
        className="movie-page-container"
        style={{
          backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
        }}
      >
        <div className="background-cover">
          <p className="home-movie-title">{movie.title}</p>
          <Genres genres={movie.genres} />
          <div className="overview-container">
            <p className="overview">{movie.overview}</p>
          </div>
          <Providers providers={providers} />
          <Cast cast={cast} />
        </div>
        {/* <Trailer trailer={trailer} /> */}
      </div>
    </div>
  );
};

export default MoviePage;
