import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
//AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Nav = ({ fetchMovies, searchType }) => {
  return (
    <nav className="navigation-container" data-aos="fade-down">
      <Link to={`/`}>
        <h1 className="page-title">Cinema Paradiso Trailers</h1>
      </Link>
      <Search fetchMovies={fetchMovies} searchType={searchType} />
    </nav>
  );
};

export default Nav;
