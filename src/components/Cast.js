import React from "react";

const Cast = ({ title, cast }) => {
  let principalCast = [];
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  for (let i = 0; i < cast.length && i < 5; i++) {
    principalCast.push(cast[i]);
  }

  console.log(cast);

  return (
    <div className="cast">
      <p>{title}</p>
      <div className="cast-container">
        {principalCast[0]
          ? principalCast.map((actor) => (
              <div className="cast-card" key={actor.id}>
                <img
                  className="cast-img"
                  width="80px"
                  src={`${IMG_URL}${actor.profile_path}`}
                  alt={actor.name}
                />
                <p className="cast-name">{actor.name}</p>
                <p className="cast-name">{actor.character ? actor.character : actor.job}</p>
                
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cast;
