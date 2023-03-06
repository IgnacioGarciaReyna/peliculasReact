import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import axios from "axios";
//AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const MoviesContainer = ({ title, moviesType, searchKey }) => {
  const [movies, setMovies] = useState([]);

  //Width y height del viewport
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

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

    if (results[0]) {
      setMovies(results);
    } else {
      fetchMovies("/discover/movie");
    }
  };

  useEffect(() => {
    if (searchKey === "") {
      fetchMovies(moviesType);
    } else {
      fetchMovies(moviesType, searchKey);
    }
  }, [moviesType]);

  return (
    <div
      className="container-movies"
      data-aos="fade-right"
    >
      <p className="movies-container-title">{title}</p>
      <Swiper
        slidesPerView={
          screenSize.width > 960
            ? 7
            : screenSize.width > 600
            ? 5
            : screenSize.width > 420
            ? 3
            : 2
        }
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
