import React, { Fragment } from "react";
import YouTube from "react-youtube";

const Trailer = ({ trailer }) => {
  return (
    <Fragment>
      <p>{trailer.type}</p>
      <p>{trailer.name}</p>
      {trailer ? (
        <YouTube
          videoId={trailer.key}
          className="trailer-reproductor"
          containerClassName={"youtube-container"}
          opts={{
            // Tomado de youtube react
            width: "600px",
            height: "100%",
            playerVars: {
              autoplay: 0,
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
      ) : null}
    </Fragment>
  );
};

export default Trailer;
