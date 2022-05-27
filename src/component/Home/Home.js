import React from "react";
import AddProduct from "../AddProducts/AddProduct";
import CardContainer from "../CardContainer/CardContainer";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CardContainer />
      <AddProduct />
    </div>
  );
};

export default Home;
