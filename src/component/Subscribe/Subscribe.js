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
          {/* <p>
            we will sent you the bes of our blog just once a month.
            <span>we promise!</span>
          </p> */}
          <div className="input-area">
            <input type="email" required placeholder="Email address" />
          </div>
          <div className="button-area">
            <button type="submit" className="btn-custom mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
