import React, { Fragment } from "react";
import Search from "./Search";

const Nav = ({ fetchMovies }) => {
  return (
    <nav className="navigation-container">
      <h1 className="page-title">Black Lodge Trailers</h1>
      <Search fetchMovies={fetchMovies} />
    </nav>
  );
};

export default Nav;
