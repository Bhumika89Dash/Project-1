import React from "react";
import "./Charity.css";
import charityImage from "../assets/chasup.jpg"; // Update with correct image path

const Charity = () => {
  return (
    <div className="charity-container">
      <div className="charity-content">
        {/* Left Side: Image */}
        <div className="charity-image">
          <img src={charityImage} alt="Charity" />
        </div>

        {/* Right Side: Text */}
        <div className="charity-text">
          <h2 id="cs">Charity</h2>
          <p>
            Giving back to the community is the essence of humanity. AltruMitra supports various charitable initiatives,
            providing aid to those in need, from food and shelter programs to disaster relief efforts.
          </p>

          <ul>
            <li>Food & Shelter Assistance</li>
            <li>Support for Orphanages</li>
            <li>Humanitarian Aid</li>
            <li>Disaster Response & Recovery</li>
          </ul>

          {/* Button Instead of "Learn More" */}
          <button className="charity-btn">Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default Charity;
