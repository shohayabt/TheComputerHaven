import React from "react";
import "./AddProduct.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  return (
    <section className="flex justify-center px-10 py-10">
      <form
        class="form-control w-100"
        onSubmit={(e) => {
          e.preventDefault();
          const email = user.email;
          const name = e.target.name.value;
          const price = e.target.price.value;
          const quantity = e.target.quantity.value;
          const suplierName = user.displayName || user.email;
          const imageUrl = e.target.imageUrl.value;
          const description = e.target.description.value;
          const product = {
            email,
            name,
            price,
            quantity,
            suplierName,
            imageUrl,
            description,
          };
          const url = `http://localhost:5000/products`;
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
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              name="email"
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
              name="suplierName"
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
              name="name"
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
            <input
              type="text"
              name="quantity"
              placeholder="10"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Enter Amount</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              name="price"
              placeholder="10"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Image Url</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              class="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label class="label">
            <span class="label-text">Product Details</span>
          </label>
          <label class="input-group">
            <textarea
              class="textarea textarea-bordered"
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
