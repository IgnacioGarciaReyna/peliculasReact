import React from "react";
import YouTube from "react-youtube";

const Trailer = ({ trailer }) => {
  return (
    <div>
      {trailer ? (
        <YouTube
          videoId={trailer.key}
          className="reproductor container"
          containerClassName={"youtube-container"}
          opts={{
            // Tomado de youtube react
            with: "100%",
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
    </div>
  );
};

export default Trailer;
