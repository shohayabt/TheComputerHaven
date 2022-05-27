import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/car/${id}`);
  };

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <span className="flex justify-between">
            <span className="text-red-600">
              <label class="input-group">
                <span>Price</span>
                <input
                  type="text"
                  disabled
                  readOnly
                  value={10}
                  class="input-md input-bordered w-30"
                />
              </label>
            </span>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cum,
            nesciunt sit saepe debitis ad autem dolores expedita officia ducimus
            aliquam a error doloremque, voluptates eaque rem magni porro. Ullam.
          </p>
          <span className="text-red-600 w-50">
            <label class="input-group">
              <span>Quantity</span>
              <input
                type="text"
                disabled
                readOnly
                value={10}
                class="input-md input-bordered w-30"
              />
            </label>
          </span>
          <div className="card-actions justify-end">
            <button
              className="btn-full signout"
              onClick={() => {
                navigateToPurchase();
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
