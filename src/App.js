import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //Variables de estado
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);

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

  //Petición a la API
  const fetchMovies = async (searchKey) => {
    //Si no hay busqueda, que muestre "descubrir"
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    // window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/movie/:id"
          element={<MoviePage movie={movie} IMAGE_PATH={IMAGE_PATH} trailer={trailer}/>}
        />
        <Route
          path="/"
          element={
            <div>
              <Nav fetchMovies={fetchMovies} />
              <Movies
                movies={movies}
                selectMovie={selectMovie}
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
