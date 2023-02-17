import React from "react";
import emptyPicture from "./../assets/img/blank-profile-picture.png";

const Cast = ({ title, cast }) => {
  let principalCast = [];
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const relevantJobs = [
    "Producer",
    "Co-Producer",
    "Screenplay",
    "Director",
    "Director of Photography",
    "Editor",
    "Executive Producer",
    "Original Music Composer",
    "Writer",
    "Music Producer",
    "Special Effects",
    "Novel",
    "Script",
    "Art Direction",
    "Sound Editor",
    "Musician",
  ];


  if (cast[0] && cast[0].character) {
    principalCast = cast.filter((a, i) => i < 10);
  } else if (cast[0] && cast[0].job) {
    principalCast = cast.filter((a) => relevantJobs.includes(a.job));
  }

  return (
    <div className="cast">
      <p>{title}</p>
      <div className="cast-container">
        {principalCast[0]
          ? principalCast.map((actor) => (
              <div
                className="cast-card"
                key={
                  actor.job ? actor.id + actor.job : actor.id + actor.character
                }
              >
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
