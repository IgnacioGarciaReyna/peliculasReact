import React, { Fragment } from "react";
import Search from "./Search";

const Nav = ({ fetchMovies, searchType }) => {
  return (
    <nav className="navigation-container">
      <h1 className="page-title">Black Lodge Trailers</h1>
      <Search fetchMovies={fetchMovies} searchType={searchType} />
    </nav>
  );
};

export default Nav;
