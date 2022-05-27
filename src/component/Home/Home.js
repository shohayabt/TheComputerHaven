import React from "react";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import CardContainer from "../CardContainer/CardContainer";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CardContainer />
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
