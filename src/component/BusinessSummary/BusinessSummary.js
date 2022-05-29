import React from "react";
import {
  FaCoffee,
  FaComment,
  FaRegThumbsUp,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <section className="business-summary px-10 py-0">
      <div className="summary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4">
        <div className="summary-card p-10">
          <p>
            <FaCoffee />
          </p>
          <span className="font-bold my-2">999+</span>
        </div>
        <div className="summary-card p-10">
          <p>
            <FaUsers />
          </p>
          <span className="font-bold my-2">999+</span>
        </div>
        <div className="summary-card p-10">
          <p>
            <FaRegThumbsUp />
          </p>
          <span className="font-bold my-2">999+</span>
        </div>
        <div className="summary-card p-10">
          <p>
            <FaComment />
          </p>
          <span className="font-bold my-2">999+</span>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
