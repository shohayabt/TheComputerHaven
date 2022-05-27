import React from "react";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import CardContainer from "../CardContainer/CardContainer";
import Hero from "../Hero/Hero";
import ReviewSlider from "../ReviewSlider/ReviewSlider";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CardContainer />
      <BusinessSummary></BusinessSummary>
      <ReviewSlider></ReviewSlider>
    </div>
  );
};

export default Home;
