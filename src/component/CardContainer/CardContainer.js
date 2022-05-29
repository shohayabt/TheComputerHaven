import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardContainer = () => {
  const [products, setProducts] = useState([]);

  const product = products.slice(0, 6);
  useEffect(() => {
    fetch("https://polar-taiga-99861.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="px-10 pb-12">
      <div className="title">PRODUCTS</div>
      <div className="card-contianer grid gap-4 grid-cols-3">
        {product.map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
