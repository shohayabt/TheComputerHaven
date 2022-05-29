import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="main px-10">
      <div className="flex flex-col hero-section">
        <h1 className="title-main">
          I’m <span>truly happy you’re here.</span>
        </h1>
        <p className="text">
          <span>I'm Katie.</span>
          <p
            className="text-lg
"
          >
            Leading Computer, Laptop and Gaming PC Retail and Online Shop in
            Bangladesh Technology has become a part of our daily lives and for a
            huge portion of our life, we are dependent on tech products daily.
            There is hardly a home in Bangladesh without a tech product. This is
            where we come in.
          </p>
        </p>
        <button className="btn-custom ">Explore More</button>
      </div>
    </section>
  );
};

export default Hero;
