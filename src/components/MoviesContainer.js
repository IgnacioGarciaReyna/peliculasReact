import React, { Fragment } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const MoviesContainer = ({ movies, URL_IMAGE }) => {
  return (
    <Fragment>
      {/* <div className="container-movies">
        <div className="row-movies">
          <div className="wrapper">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} URL_IMAGE={URL_IMAGE} />
            ))}
          </div>
        </div>
      </div> */}
      <Swiper
        slidesPerView={7}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <MovieCard key={movie.id} movie={movie} URL_IMAGE={URL_IMAGE} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default MoviesContainer;
