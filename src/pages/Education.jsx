import React from "react";
import "./Education.css";
import educationImage from "../assets/edusup.avif"; // Update with the correct image path

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-content">
        {/* Left Side: Image */}
        <div className="education-image">
          <img src={educationImage} alt="Education" />
        </div>

        {/* Right Side: Text */}
        <div className="education-text">
          <h2 id="se">Education & Learning</h2>
          <p>
            Education empowers individuals and strengthens communities. Through AltruMitra, we support educational initiatives
            that provide scholarships, books, school infrastructure, and learning programs.
          </p>

          <ul>
            <li>Scholarship & Financial Aid</li>
            <li>Free Educational Resources</li>
            <li>School Infrastructure Development</li>
            <li>Online & Community Learning Programs</li>
          </ul>

          {/* Button Instead of "Learn More" */}
          <button className="education-btn">Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default Education;
