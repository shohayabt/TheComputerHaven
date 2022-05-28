import React from "react";
import "./Review.css";

const Review = (props) => {
  const { description, _id, name, imageUrl } = props.product;
  return (
    <div className="card card-side bg-base-100">
      <figure>
        <img className="w-100 h-100" src={imageUrl} alt="Profile Pictures" />
      </figure>
      <div className="card-body review-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="rating rating-md">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
