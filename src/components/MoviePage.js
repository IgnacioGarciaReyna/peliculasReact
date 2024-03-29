import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Cast from "./Cast";
import Genres from "./Genres";
import MoviesContainer from "./MoviesContainer";
import Stars from "./Stars";
import Trailer from "./Trailer";
//AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

AOS.init();

const MoviePage = ({ IMAGE_PATH }) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";
  //Variables de estado
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [spinner, setSpinner] = useState(true);
  const { category, id } = useParams();

  //Petición de un solo objeto para mostrar en reproductor de video
  const fetchMovie = async (category, id) => {
    setSpinner(true);
    const { data } = await axios.get(`${API_URL}/${category}/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovie(data);
    setTimeout(() => setSpinner(false), 800);
  };

  useEffect(() => {
    fetchMovie(category, id);
  }, [id, category]);

  // console.log(movie);
  return (
    <div className="home-container">
      {spinner ? (
        <div className="spinner-container">
          <BounceLoader color="#007aff" />
        </div>
      ) : null}
      <div
        className="movie-page-container"
        style={{
          backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
        }}
      >
        <div className="background-cover-container">
          <div className="movie-title-container">
            <p className="movie-date" data-aos="zoom-in">
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>
            <p className="home-movie-title" data-aos="zoom-in">
              {category === "movie" ? movie.title : movie.name}
            </p>
            <p className="movie-tagline" data-aos="zoom-in">
              {movie.tagline}
            </p>
            <Stars vote_average={movie.vote_average} />
            <Genres genres={movie.genres} />
          </div>
          {movie.number_of_episodes ? (
            <div className="serie-data-container">
              <p>
                {movie.number_of_seasons} seasons - {movie.number_of_episodes}{" "}
                episodes
              </p>
            </div>
          ) : null}
          {/* {movie.created_by ? (
            <div className="creators">
              <Cast title={"Creators"} cast={movie.created_by} />
            </div>
          ) : null} */}
          <div className="movie-overview-container">
            <p className="movie-overview" data-aos="zoom-in">
              {movie.overview}
            </p>
          </div>
          <div className="trailer-container">
            <Trailer category={category} id={id} />
          </div>
        </div>
      </div>
      <div
        className="movie-page-container"
        style={{
          backgroundImage: `url("${IMAGE_PATH}${
            movie.belongs_to_collection
              ? movie.belongs_to_collection.backdrop_path
                ? movie.belongs_to_collection.backdrop_path
                : movie.belongs_to_collection.poster_path
                ? movie.belongs_to_collection.poster_path
                : movie.backdrop_path
              : movie.backdrop_path
          }")`,
        }}
      >
        <div className="background-cover-container">
          <Cast
            category={category}
            id={id}
            API_URL={API_URL}
            API_KEY={API_KEY}
          />
        </div>
      </div>
      <MoviesContainer
        title={`Related to "${movie.title || movie.name}"`}
        moviesType={`/${category}/${id}/recommendations`}
        searchKey={""}
      />
      <Footer />
    </div>
  );
};

export default MoviePage;
