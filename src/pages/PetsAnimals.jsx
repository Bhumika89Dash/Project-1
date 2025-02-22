import React from "react";
import "./PetsAnimals.css";
import petsImage from "../assets/anisup.jpg"; // Update with correct image path

const PetsAnimals = () => {
  return (
    <div className="pets-container">
        <div className="pets-content">
        {/* Left Side: Image */}
        <div className="pets-image">
          <img src={petsImage} alt="Pets & Animals" />
        </div>

        {/* Right Side: Text */}
        <div className="pets-text">
          <h2 id="sp">Pets & Animals</h2>
          <p>
            Animals bring love and joy into our lives, and they deserve care and protection. AltruMitra supports animal welfare
            programs, rescue shelters, and veterinary aid to ensure a better life for our furry friends.
          </p>

          <ul>
            <li>Animal Rescue & Shelters</li>
            <li>Veterinary Care & Aid</li>
            <li>Wildlife Conservation</li>
            <li>Pet Adoption Programs</li>
          </ul>

          {/* Button Instead of "Learn More" */}
          <button className="pets-btn">Get Involved</button>
        </div>
      </div>
      </div>
  );
};

export default PetsAnimals;
