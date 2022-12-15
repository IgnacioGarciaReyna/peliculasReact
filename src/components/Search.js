import React, { useState } from "react";

const Search = ({fetchMovies}) => {
    const [searchKey, setSearchKey] = useState("");

  //Busqueda de películas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  return (
    <form className="container mb-4" onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default Search;
