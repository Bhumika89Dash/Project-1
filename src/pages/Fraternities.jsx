import React from "react";
import "./Fraternities.css";
import fratImage from "../assets/fratsup.avif"; // Update with actual image path

const Fraternities = () => {
  return (
    <div className="fraternities-section" id="fraternities-section">
      <div className="fraternities-content">
        {/* Left Side: Image */}
        <div className="fraternities-image">
          <img src={fratImage} alt="Fraternities & Sororities" />
        </div>

        {/* Right Side: Text */}
        <div className="fraternities-text">
          <h2 id="hf">Fraternities & Sororities</h2>
          <p>
            Fraternities and sororities foster lifelong friendships, leadership skills, and academic growth.
            They contribute to personal and professional development while promoting unity and service to the community.
          </p>

          <ul>
            <li>Leadership & Personal Growth</li>
            <li>Networking Opportunities</li>
            <li>Community Service & Charity Work</li>
            <li>Brotherhood & Sisterhood Bonds</li>
          </ul>

          <a href="#fraternities-section" className="fraternities-btn">Get Involved</a>
        </div>
      </div>
    </div>
  );
};

export default Fraternities;
