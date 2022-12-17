import React from "react";

const Cast = ({ cast }) => {
  let principalCast = [];
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  for (let i = 0; i < 5; i++) {
    principalCast.push(cast[i]);
  }

  return (
    <div>
      {principalCast[0]
        ? principalCast.map((actor) => (
            <div>
              <img width="80px" src={`${IMG_URL}${actor.profile_path}`} alt={actor.name} />
              <p className="text-white" key={actor.id}>{actor.name}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Cast;
