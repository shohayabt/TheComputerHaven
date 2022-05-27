import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <section className="flex justify-center px-10 py-10">
      <form class="form-control w-100">
        <div>
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              placeholder="Product Name"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <label class="input-group">
            <input type="text" placeholder="10" class="input input-bordered" />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Enter amount</span>
          </label>
          <label class="input-group">
            <input type="text" placeholder="10" class="input input-bordered" />
          </label>
        </div>
        <div className="button-area my-3 flex justify-center">
          <button className="btn-full">add product</button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
