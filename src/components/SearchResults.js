import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Footer from "./Footer";
import MoviesContainer from "./MoviesContainer";

const SearchResults = ({}) => {
  const [spinner, setSpinner] = useState(true);
  const { key } = useParams();
  //Strings para el fetch de varias Movies
  const searchMoviesType = "/search/movie";
  const searchSeriesType = "/search/tv";
  setTimeout(() => setSpinner(false), 800);
  return (
    <div className="home-container">
      {spinner ? (
        <div className="spinner-container">
          <BounceLoader color="#007aff" />
        </div>
      ) : null}
      <MoviesContainer
        title={`Results for "${key}" in films`}
        moviesType={searchMoviesType}
        searchKey={key}
      />
      <MoviesContainer
        title={`Results for "${key}" in TV series`}
        moviesType={searchSeriesType}
        searchKey={key}
      />
      <Footer />
    </div>
  );
};

export default SearchResults;
