import React from "react";
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
  return (
    <section className="review-slider px-10">
      <div className="title">REVIEWS</div>
      <div className="review-container">
        <Slider {...settings}>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSlider;
