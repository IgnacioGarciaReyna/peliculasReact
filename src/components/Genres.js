import React from "react";

const Genres = ({genres}) => {
  return (
    <div>
      {genres
        ? genres.map((genre) => (
            <p key={genre.id} className="text-white">
              {genre.name}
            </p>
          ))
        : null}
    </div>
  );
};

export default Genres;
