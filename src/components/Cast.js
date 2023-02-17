import axios from "axios";
import React, { useEffect, useState } from "react";
import emptyPicture from "./../assets/img/blank-profile-picture.png";

const Cast = ({ category, id, API_URL, API_KEY }) => {
  const [cast, setCast] = useState({});
  const [crew, setCrew] = useState({});

  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const relevantJobs = [
    "Producer",
    "Screenplay",
    "Director",
    "Director of Photography",
    "Editor",
    "Original Music Composer",
    "Writer",
    "Special Effects",
    "Script",
    "Musician",
    "Theme Song Performance",
    "Executive Producer",
  ];

  const fetchCast = async (category, id) => {
    const data = await axios.get(`${API_URL}/${category}/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    setCast(data.data.cast.filter((a, i) => i < 10));
    setCrew(data.data.crew.filter((a) => relevantJobs.includes(a.job)));
  };

  useEffect(() => {
    fetchCast(category, id);
  }, [category, id]);

  return (
    <div className="cast">
      <div className="cast-container">
        {cast[0]
          ? cast.map((actor) => (
              <div className="cast-card" key={actor.id + actor.character}>
                <div className="cast-img-container">
                  <img
                    className="cast-img"
                    width="80px"
                    src={
                      actor.profile_path !== null
                        ? `${IMG_URL}${actor.profile_path}`
                        : emptyPicture
                    }
                    alt={actor.name}
                  />
                </div>
                <p className="cast-name">{actor.name}</p>
              </div>
            ))
          : null}
      </div>
      <div className="cast-container">
        {crew[0]
          ? crew.map((worker) => (
              <div className="cast-card" key={worker.id + worker.job}>
                <div className="cast-img-container">
                  <img
                    className="cast-img"
                    width="80px"
                    src={
                      worker.profile_path !== null
                        ? `${IMG_URL}${worker.profile_path}`
                        : emptyPicture
                    }
                    alt={worker.name}
                  />
                </div>
                <p className="cast-name">{worker.name}</p>
                <p className="cast-name"> {worker.job} </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cast;
