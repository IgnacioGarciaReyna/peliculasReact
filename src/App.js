import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Nav from "./components/Nav";
import Movies from "./components/Movies";

function App() {
  

  //Variables de estado
  
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);


  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);

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
    // setMovie(results[0]);

    //Mostrar algo por defecto para evitar un error
    // if (results.length) {
    //   await fetchMovie(results[0].id);
    // }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const selectMovie = async (movie) => {
    // fetchMovie(movie.id);
    // setMovie(movie);
    // window.scrollTo(0, 0);
  };
  
  return (
    <div>
      <Nav fetchMovies={fetchMovies} />
      <Movies movies={movies} selectMovie={selectMovie} URL_IMAGE={URL_IMAGE}/>
    </div>
  );
}

export default App;
