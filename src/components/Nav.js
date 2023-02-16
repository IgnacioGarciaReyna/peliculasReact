import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = ({ fetchMovies, searchType }) => {
  return (
    <nav className="navigation-container">
      <Link to={`/`}>
        <h1 className="page-title">Black Lodge Trailers</h1>
      </Link>
      <Search fetchMovies={fetchMovies} searchType={searchType} />
    </nav>
  );
};

export default Nav;
