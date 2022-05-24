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
            where we come in. Star Tech & Engineering Ltd had started as a Tech
            product shop way back in March 2007. We focused on giving the
            customers the best service possible. This is why Star Tech is one of
            The most trusted names in the tech industry of Bangladesh today.
            After a long 14 year journey; Star Tech & Engineering Ltd. was
            certified with the renowned "ISO 9001:2015 certification" because of
            the best Quality control management system. As an "ISO 9001:2015
            certified" organization; Star Tech & Engineering Ltd. is now up to
            the international standard that specifies a quality management
            system (QMS). This Certification denotes that this organization
            consistently maintains all sorts of regulatory requirements to
            provide products and services for meeting all sorts of customer
            requirements.
          </p>
        </p>
        <button className="btn-custom ">Explore More</button>
      </div>
    </section>
  );
};

export default Hero;
