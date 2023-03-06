import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import YouTube from "react-youtube";

const Trailer = ({ category, id }) => {
  const [trailer, setTrailer] = useState(null);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";

  // //Peticion para el trailer
  const fetchTrailer = async (category, id) => {
    const { data } = await axios.get(`${API_URL}/${category}/${id}/videos?`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    const trailerData = data.results.find(
      (video) => video.name === "Official Trailer" || video.type === "Trailer"
    );
    setTrailer(trailerData ? trailerData : data.results[0]);
  };

  useEffect(() => {
    fetchTrailer(category, id);
  }, [category, id]);
  return (
    <Fragment>
      {trailer ? (
        <Fragment>
          <YouTube
            videoId={trailer.key}
            className="trailer-reproductor"
            containerClassName={"youtube-container"}
            opts={{
              width: "600px",
              height: "100%",
            }}
          />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Trailer;
