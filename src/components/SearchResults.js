import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const SearchResults = ({ searchType, fetchMovies, movies, URL_IMAGE }) => {
  const { key } = useParams();
  fetchMovies(searchType, key);
  return (
    <div className="home-container">
      <p>Results for "{key}"</p>
      <div className="search-results-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} URL_IMAGE={URL_IMAGE} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
