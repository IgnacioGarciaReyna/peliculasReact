import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <form className="search-movies-container">
      <input
        className="search-movies-input"
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <Link to={`/search/${searchKey}`}>
        <button className="search-movies-button">Search</button>
      </Link>
    </form>
  );
};

export default Search;
