import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import MoviesContainer from "./MoviesContainer";

const SearchResults = ({}) => {
  const { key } = useParams();
  //Strings para el fetch de varias Movies

  const searchMoviesType = "/search/movie";
  const searchSeriesType = "/search/tv";

  return (
    <div className="home-container">
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
    </div>
  );
};

export default SearchResults;
