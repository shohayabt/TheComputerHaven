import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe px-10 flex justify-center items-center">
      <div className="subscribe-text flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-3xl  lg:text-4xl mb-2 text-white font-extrabold uppercase">
          Subscribe to our newsleter <span className="text-5xl">!</span>
        </h1>
        <div className="input-area w-full">
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
    </section>
  );
};

export default Subscribe;
