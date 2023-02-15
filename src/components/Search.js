import React, { useState } from "react";

const Search = ({ fetchMovies }) => {
  const [searchKey, setSearchKey] = useState("");

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies("search", searchKey);
  };

  return (
    <form className="search-movies-container" onSubmit={searchMovies}>
      <input
        className="search-movies-input"
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button className="search-movies-button">Search</button>
    </form>
  );
};

export default Search;
