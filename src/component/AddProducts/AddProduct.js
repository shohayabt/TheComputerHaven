import React from "react";
import "./AddProduct.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  return (
    <section className="flex justify-center px-10 py-10">
      <form
        className="form-control w-100"
        onSubmit={(e) => {
          e.preventDefault();
          const email = user.email;
          const name = e.target.name.value;
          const price = e.target.price.value;
          const minOrderQuantity = e.target.min.value;
          const available = e.target.ava.value;
          const suplierName = user.displayName || user.email;
          const imageUrl = e.target.imageUrl.value;
          const description = e.target.description.value;
          const product = {
            email,
            name,
            price,
            suplierName,
            imageUrl,
            description,
            minOrderQuantity,
            available,
          };
          const url = `https://polar-taiga-99861.herokuapp.com/products`;
          fetch(url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => alert(data));
          e.target.reset();
        }}
      >
        <div>
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="email"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="suplierName"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="quantity"
              placeholder="10"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Minimum</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="min"
              placeholder="10"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Available</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="ava"
              placeholder="10"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Enter Amount</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="price"
              placeholder="10"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Product Details</span>
          </label>
          <label className="input-group">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              name="description"
            ></textarea>
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
