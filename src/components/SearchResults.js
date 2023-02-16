import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import MoviesContainer from "./MoviesContainer";

const SearchResults = ({
  searchMoviesType,
  searchSeriesType,
  fetchMovies,
  movies,
  series,
  URL_IMAGE,
}) => {
  const { key } = useParams();
  fetchMovies(searchMoviesType, key);
  fetchMovies(searchSeriesType, key);

  return (
    <div className="home-container">
      <MoviesContainer
        title={`Results for "${key}" in films`}
        movies={movies}
        URL_IMAGE={URL_IMAGE}
      />
      <MoviesContainer
        title={`Results for "${key}" in TV series`}
        movies={series}
        URL_IMAGE={URL_IMAGE}
      />
      {/* <div className="search-results-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} URL_IMAGE={URL_IMAGE} />
        ))}
      </div> */}
    </div>
  );
};

export default SearchResults;
