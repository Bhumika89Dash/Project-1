import React from "react";
import "./Religious.css";
import religiousImage from "../assets/relsup.jpg"; // Replace with actual image path

const Religious = () => {
  return (
    <div id="religious-support" className="religious-container">
      <h2 className="religious-title">Religious & Spiritual Support</h2>
      <div className="religious-content">
        <img src={religiousImage} alt="Religious Support" className="religious-image" />
        <div className="religious-text">
          <p>
            Faith and spirituality provide strength and guidance to many. Our Religious Support
            Fund helps in building places of worship, supporting religious events, and assisting
            those in need within faith communities.
          </p>
          <a href="#religious-support" className="bookmark-link">
            <button className="donate-button">Support Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Religious;
