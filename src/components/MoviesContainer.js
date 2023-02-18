import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import axios from "axios";

const MoviesContainer = ({ title, moviesType, searchKey }) => {
  const [movies, setMovies] = useState([]);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";

  //Petición a la API
  const fetchMovies = async (type, searchKey) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}${type}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
  };

  useEffect(() => {
    if (searchKey === "") {
      fetchMovies(moviesType);
    } else {
      fetchMovies(moviesType, searchKey);
    }
  }, [moviesType]);

  return (
    <div className="container-movies">
      <p className="movies-container-title">{title}</p>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        grabCursor={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesContainer;
