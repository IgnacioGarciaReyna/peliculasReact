import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
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
  const [playing, setPlaying] = useState(false);
  const [providers, setProviders] = useState({});

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

  fetchMovie(id);
  fetchRecomendations(id);
  fetchProviders(id);

  return (
    <Fragment>
      <div>
        <main>
          <div
            className="viewtrailer"
            style={{
              backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
            }}
          >
            <div className="container">
              <div>
                <h1 className="text-white">{movie.title}</h1>
                <p className="text-white">{movie.overview}</p>
                <Genres genres={movie.genres} />
                <Providers providers={providers} />
              </div>
            </div>
          </div>
          <Trailer trailer={trailer} />
        </main>
      </div>
    </Fragment>
  );
};

export default MoviePage;
