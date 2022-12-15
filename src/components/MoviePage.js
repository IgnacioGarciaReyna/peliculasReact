import React from "react";

const MoviePage = () => {
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
    <Fragment>
      {/* Contenedor del banner y reproductor de video*/}
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
