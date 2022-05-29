import React from "react";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import CardContainer from "../CardContainer/CardContainer";
import Hero from "../Hero/Hero";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CardContainer />
      <BusinessSummary></BusinessSummary>
      <ReviewSlider></ReviewSlider>
      <Subscribe />
    </div>
  );
};

export default Home;
