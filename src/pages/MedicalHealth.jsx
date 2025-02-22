import React from "react";
import "./MedicalHealth.css";
import medicalImage from "../assets/medsup.jpg"; // Replace with actual image path

const MedicalHealth = () => {
  return (
    <div id="medical-health" className="medical-health-container">
      <h2 className="medical-title">Medical & Health Support</h2>
      <div className="medical-content">
        <img src={medicalImage} alt="Medical & Health" className="medical-image" />
        <div className="medical-text">
          <p>
            Healthcare is a fundamental right, but many people struggle to afford it. Our Medical
            & Health Fund provides financial assistance for critical treatments, medications, and
            emergency care to those in need.
          </p>
          <a href="#medical-health" className="bookmark-link">
            <button id="med-button" className="btn btn-primary">Support Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MedicalHealth;
