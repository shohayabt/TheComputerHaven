import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe px-10">
      <div className="container">
        <div className="subscribe-text">
          <h1>
            Subscribe to our newsleter <span>!</span>
          </h1>
          <div className="input-area w-96">
            <input
              className="input input-bordered w-full"
              type="email"
              required
              placeholder="Email address"
            />
          </div>
          <div className="button-area">
            <button type="submit" className="btn-full signout mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
