import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardContainer = () => {
  const [products, setProducts] = useState([]);

  const car = products.slice(0, 6);
  useEffect(() => {
    fetch("https://sleepy-bayou-43362.herokuapp.com/car")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
