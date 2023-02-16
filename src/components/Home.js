import React, { useState } from "react";
import Stars from "./Stars";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Home = ({ movies, IMAGE_PATH }) => {
  return (
    <div className="home-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <div
              className="movie-page-container"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              <div className="background-cover">
                <p>{movie.release_date}</p>
                <p className="home-movie-title">{movie.title} </p>
                <img
                  className="home-movie-poster"
                  src={`${IMAGE_PATH}${movie.poster_path}`}
                  alt=""
                />
                <Stars vote_average={movie.vote_average} />
                <div className="overview-container">
                  <p className="home-overview">{movie.overview}</p>
                </div>
                <div>
                  <Link to={`/movie/${movie.id}`}>
                    <button>Go to details</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
