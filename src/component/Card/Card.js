import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { description, _id, price, quantity, name, imageUrl } = props.product;
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={imageUrl} alt="car!" />
        </figure>
        <div className="card-body px-10">
          <h2 className="card-title">{name}</h2>
          <span className="price">
            <span className="text-red-600">
              <label className="input-group">
                <span>Price</span>
                <input
                  type="text"
                  disabled
                  readOnly
                  value={price}
                  className="input-md input-bordered w-30"
                />
              </label>
            </span>
          </span>
          <p className="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            facere id sapiente quisquam sequi amet consequatur debitis unde
            corporis, impedit animi magnam in ipsum deserunt, officiis aut.
            Amet, cum nostrum.
          </p>
          <span className="text-red-600 w-50 price">
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                disabled
                readOnly
                value={quantity}
                className="input-md input-bordered w-30"
              />
            </label>
          </span>
          <div className="card-actions justify-end">
            <button
              className="btn-full signout"
              onClick={() => {
                navigateToPurchase(_id);
              }}
            >
              purchase now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
