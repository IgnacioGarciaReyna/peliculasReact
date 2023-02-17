import React from "react";
import emptyPicture from "./../assets/img/blank-profile-picture.png";

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
                <div className="cast-img-container">
                  <img
                    className="cast-img"
                    width="80px"
                    src={
                      actor.profile_path
                        ? `${IMG_URL}${actor.profile_path}`
                        : emptyPicture
                    }
                    alt={actor.name}
                  />
                </div>
                <p className="cast-name">{actor.name}</p>
                {actor.job ? <p className="cast-name"> {actor.job} </p> : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cast;
