import React, { Fragment } from "react";
import Search from "./Search";

const Nav = ({ fetchMovies }) => {
  return (
    <Fragment>
      <h2 className="text-center mt-3 mb-3">Movies & Trailers</h2>
      <Search fetchMovies={fetchMovies} />
    </Fragment>
  );
};

export default Nav;
