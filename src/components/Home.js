import React, { useEffect, useState } from "react";
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
import MoviesContainer from "./MoviesContainer";
import axios from "axios";
import { BounceLoader } from "react-spinners";

const Home = ({ IMAGE_PATH }) => {
  const [movies, setMovies] = useState([]);
  const [spinner, setSipinner] = useState(true);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "77ac9b9acb030fb65e067b31a773b067";

  //Strings para el fetch de varias Movies
  const upcomingMoviesType = "/movie/upcoming";
  const discoverMoviesType = "/discover/movie";
  const topRatedMoviesType = "/movie/top_rated";
  const popularTvType = "/tv/popular";
  const topRatedTvType = "/tv/top_rated";

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
    setSipinner(false);
  };

  useEffect(() => {
    fetchMovies(upcomingMoviesType);
  }, []);

  return (
    <div className="home-container">
      {spinner ? (
        <div className="spinner-container">
          <BounceLoader color="#007aff" />
        </div>
      ) : null}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper home-movie-container"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="movie-background-container"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              <div className="background-cover-container">
                <p className="movie-date home-movie-release-date">
                  {movie.release_date}
                </p>
                <p className="home-movie-title">{movie.title} </p>
                <Stars vote_average={movie.vote_average} />
                <div className="home-poster-overview-container">
                  <div className="home-img-stars-container">
                    <img
                      className="home-movie-poster"
                      src={`${IMAGE_PATH}${movie.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="home-overview-button-container">
                    <p className="home-overview">{movie.overview}</p>
                    <div className="home-button-container">
                      <Link to={`/movie/${movie.id}`}>
                        <button className="home-button">Go to details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <MoviesContainer
        title={"Discover Movies"}
        moviesType={discoverMoviesType}
        searchKey={""}
      />
      <MoviesContainer
        title={"Top Rated Movies"}
        moviesType={topRatedMoviesType}
        searchKey={""}
      />
      <MoviesContainer
        title={"Popular Series"}
        moviesType={popularTvType}
        searchKey={""}
      />
      <MoviesContainer
        title={"Top Rated Series"}
        moviesType={topRatedTvType}
        searchKey={""}
      />
    </div>
  );
};

export default Home;
