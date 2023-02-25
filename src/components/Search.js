import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <form className="search-movies-container">
      <input
        className="search-movies-input searcher-item"
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <Link to={searchKey != "" ? `/search/${searchKey}` : ""}>
        <button className="search-movies-button searcher-item">Search</button>
      </Link>
    </form>
  );
};

export default Search;
