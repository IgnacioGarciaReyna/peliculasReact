import React from "react";

const Stars = ({ average }) => {
  const stars = [];

  const fullStars = Math.trunc(average / 2);
  const midStar = average % 1 > 0;
  const emptyStars = Math.trunc(5 - average / 2);

  for (let i = 0; i < fullStars; i++) {
    stars.push("Full Star");
  }
  if (midStar) {
    stars.push("Mid star");
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push("Empty star");
  }

  console.log(stars);

  return (
    <div className="stars-container">
      <div>
        {stars.map((star) => (
          <p> {star}</p>
        ))}
      </div>
    </div>
  );
};

export default Stars;
