import React from "react";
import Card from "../Card/Card";

const CardContainer = () => {
  return (
    <section className="px-10">
      <div className="title">PRODUCTS</div>
      <div className="card-contianer grid gap-4 grid-cols-3">
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardContainer;
