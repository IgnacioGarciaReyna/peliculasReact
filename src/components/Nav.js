import React, { Fragment, useState } from "react";

const Nav = ({fetchMovies}) => {
  const [searchKey, setSearchKey] = useState("");

  //Busqueda de películas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <Fragment>
      <h2 className="text-center mt-3 mb-3">Trailer Movies</h2>
      {/* Buscador */}
      <form className="container mb-4" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
    </Fragment>
  );
};

export default Nav;
