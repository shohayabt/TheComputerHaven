import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="card card-side bg-base-100">
      <figure>
        <img
          src="https://api.lorem.space/image/movie?w=200&h=280"
          alt="Movie"
        />
      </figure>
      <div className="card-body review-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default Review;
