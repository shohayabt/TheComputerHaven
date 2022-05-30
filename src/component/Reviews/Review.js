import React from "react";
import "./Review.css";

const Review = (props) => {
  const { description, name, rating } = props.product;
  const review = description.slice(0, 100);
  return (
    <div className="card card-side bg-base-100">
      <div className="card-body review-body">
        <h2 className="card-title">{name}</h2>
        <p>{review}</p>
        <p>{rating} /5</p>
      </div>
    </div>
  );
};

export default Review;
