import React, { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ vote_average }) => {
  const stars = [];

  const average = vote_average / 2;

  for (let i = 0; i < 5; i++) {
    if (average - i >= 0.9) {
      stars.push({
        element: <BsStarFill />,
        id: i,
      });
    } else if (average - i > 0.3) {
      stars.push({
        element: <BsStarHalf />,
        id: i,
      });
    } else {
      stars.push({
        element: <BsStar />,
        id: i,
      });
    }
  }

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div key={star.id}>{star.element}</div>
      ))}
      <p>{average.toFixed(2)}</p>
    </div>
  );
};

export default Stars;
