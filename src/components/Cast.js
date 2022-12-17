import React from "react";

const Cast = ({ cast }) => {
  return (
    <div>
      {cast[0] ? cast.map((actor) => <p key={actor.id}>{actor.name}</p>) : null}
    </div>
  );
};

export default Cast;
