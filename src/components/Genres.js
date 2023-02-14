import React from "react";

const Genres = ({ genres }) => {
  return (
    <div className="genres-container">
      {genres
        ? genres.map((genre) => (
            <div className="genre-name-container">
              <p key={genre.id} className="genre-name">
                {genre.name}
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Genres;
