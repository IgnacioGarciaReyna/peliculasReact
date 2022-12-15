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
  

  //Petición de un solo objeto para mostrar en reproductor de video
  // const fetchMovie = async (id) => {
  //   const { data } = await axios.get(`${API_URL}/movie/${id}`, {
  //     params: {
  //       api_key: API_KEY,
  //       append_to_response: "video",
  //     },
  //   });

  //   fetchTrailer(data.id);
  //   setMovie(data);
  // };

  // //Peticion para el trailer
  // const fetchTrailer = async (id) => {
  //   const { data } = await axios.get(`${API_URL}/movie/${id}/videos?`, {
  //     params: {
  //       api_key: API_KEY,
  //       language: "en-US",
  //     },
  //   });
  //   const trailerData = data.results.find(
  //     (video) => video.name === "Official Trailer"
  //   );
  //   setTrailer(trailerData ? trailerData : data.results[0]);
  // };

  

  

  return (
    <div>
      <Nav fetchMovies={fetchMovies} />
      {/* Contenedor del banner y reproductor de video*/}
      {/* <div>
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container"}
                    opts={{
                      // Tomado de youtube react
                      with: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div>
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div> */}
      <Movies movies={movies} selectMovie={selectMovie} URL_IMAGE={URL_IMAGE}/>
    </div>
  );
}

export default App;
