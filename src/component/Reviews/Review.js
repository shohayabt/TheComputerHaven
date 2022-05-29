import React from "react";
import "./Review.css";

const Review = (props) => {
  const { description, _id, name, imageUrl } = props.product;
  const review = description.slice(0, 160);
  return (
    <div className="card card-side bg-base-100">
      <div className="card-body review-body">
        <h2 className="card-title">{name}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
