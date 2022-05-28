import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../Reviews/Review";

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [reviews, setreviews] = useState([]);

  const review = reviews.slice(0, 6);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <section className="review-slider px-10">
      <div className="title">REVIEWS</div>
      <div className="review-container">
        <Slider {...settings}>
          {review.map((review) => (
            <Review key={review._id} product={review}></Review>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSlider;
