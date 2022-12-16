import axios from "axios";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const MoviePage = ({
  movie,
  fetchMovie,
  IMAGE_PATH,
  trailer,
  API_KEY,
  API_URL,
  setMovies
}) => {
  const [playing, setPlaying] = useState(false);

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

  fetchMovie(id);
  fetchRecomendations(id);

  // console.log(movie.genres)

  return (
    <Fragment>
      <div>
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
                    <div>
                      {movie.genres
                        ? movie.genres.map((genre) => (
                            <p key={genre.id} className="text-white">
                              {genre.name}
                            </p>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>
    </Fragment>
  );
};

export default MoviePage;
