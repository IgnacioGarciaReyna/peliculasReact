import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import MoviesContainer from "./components/MoviesContainer";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  //Variables de estado
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularSeries, setpopularSeries] = useState([]);
  const [topRatedSeries, settopRatedSeries] = useState([]);

  const [trailer, setTrailer] = useState(null);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  //Petición de un solo objeto para mostrar en reproductor de video
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "video",
      },
    });

    fetchTrailer(data.id);
    setMovie(data);
  };

  // //Peticion para el trailer
  const fetchTrailer = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}/videos?`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    const trailerData = data.results.find(
      (video) => video.name === "Official Trailer"
    );
    setTrailer(trailerData ? trailerData : data.results[0]);
  };

  //Strings para el fetch
  const discoverMoviesType = "/discover/movie";
  const topRatedMoviesType = "/movie/top_rated";
  const popularTvType = "/tv/popular";
  const topRatedTvType = "/tv/top_rated";
  const searchType = "/search/movie";

  //Petición a la API
  const fetchMovies = async (type, searchKey) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}${type}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    if (type == discoverMoviesType) {
      setDiscoverMovies(results);
    } else if (type == topRatedMoviesType) {
      setTopRatedMovies(results);
    } else if (type == popularTvType) {
      setpopularSeries(results);
    } else if (type == topRatedTvType) {
      settopRatedSeries(results);
    }
  };

  useEffect(() => {
    fetchMovies(discoverMoviesType);
    fetchMovies(topRatedMoviesType);
    fetchMovies(popularTvType);
    fetchMovies(topRatedTvType);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/movie/:id"
          element={
            <div>
              <Nav fetchMovies={fetchMovies} searchType={searchType} />
              <MoviePage
                movie={movie}
                fetchMovie={fetchMovie}
                IMAGE_PATH={IMAGE_PATH}
                trailer={trailer}
                API_KEY={API_KEY}
                API_URL={API_URL}
                setMovies={setDiscoverMovies}
              />
              <MoviesContainer movies={discoverMovies} URL_IMAGE={URL_IMAGE} />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <Nav fetchMovies={fetchMovies} searchType={searchType} />
              <Home movies={discoverMovies} IMAGE_PATH={IMAGE_PATH} />
              <MoviesContainer
                title={"Discover Movies"}
                movies={discoverMovies}
                URL_IMAGE={URL_IMAGE}
              />
              <MoviesContainer
                title={"Top Rated Movies"}
                movies={topRatedMovies}
                URL_IMAGE={URL_IMAGE}
              />
              <MoviesContainer
                title={"Popular Series"}
                movies={popularSeries}
                URL_IMAGE={URL_IMAGE}
              />
              <MoviesContainer
                title={"Top Rated Series"}
                movies={topRatedSeries}
                URL_IMAGE={URL_IMAGE}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
