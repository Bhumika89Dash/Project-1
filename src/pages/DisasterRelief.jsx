import React from "react";
import "./DisasterRelief.css";
import disasterImage from "../assets/disasterhover.jpg"; // Replace with actual image path

const DisasterRelief = () => {
  return (
    <div id="disaster-relief" className="disaster-relief-container">
      <h2 className="disaster-title">Disaster Relief</h2>
      <div className="disaster-content">
        <img src={disasterImage} alt="Disaster Relief" className="disaster-image" />
        <div className="disaster-text">
          <p>
            Natural disasters leave communities devastated. Our Disaster Relief Fund helps provide
            immediate aid, shelter, food, and medical support to those affected. Your contribution
            can make a difference in rebuilding lives.
          </p>
          <button id="disaster-button"className="btn btn-primary">Support Now</button>
        </div>
      </div>
    </div>
  );
};

export default DisasterRelief;
