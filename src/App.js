import React, { Fragment } from "react";
import Nav from "./components/Nav";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";

function App() {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  return (
    <Router>
      <Routes>
        <Route
          path="/search/:key"
          element={
            <div>
              <Nav />
              <SearchResults />
            </div>
          }
        />
        <Route
          path="/:category/:id"
          element={
            <div>
              <Nav />
              <MoviePage IMAGE_PATH={IMAGE_PATH} />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <Nav />
              <Home IMAGE_PATH={IMAGE_PATH} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
