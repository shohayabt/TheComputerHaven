import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";

const ManageProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://polar-taiga-99861.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>NAME</th>
            <th>PRICE</th>
            <th>TOTAL</th>
            <th>ABOUT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <ProductData key={product._id} product={product}></ProductData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
