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
  const [cast, setCast] = useState({});
  const [crew, setCrew] = useState({});
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

  const fetchCast = async (category, id) => {
    const data = await axios.get(`${API_URL}/${category}/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });

    setCast(data.data.cast);
    setCrew(data.data.crew);
  };

  fetchMovie(category, id);
  fetchRecomendations(category, id);
  fetchProviders(id);
  fetchCast(category, id);
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
          <div className="overview-container">
            <p className="overview">{movie.overview}</p>
          </div>
          <Providers providers={providers} />
          <Cast title={"Cast"} cast={cast} />
          <Cast title={"Crew"} cast={crew} />
        </div>
        {/* <Trailer trailer={trailer} /> */}
      </div>
    </div>
  );
};

export default MoviePage;
