import React, { useState, useRef } from "react";
import "./Support.css";
import disasterIcon from "../assets/disastericon.png";
import fraternityIcon from "../assets/franlogo.png";
import educationIcon from "../assets/educationlogo.png";
import medicalIcon from "../assets/medicallogo.png";
import petsIcon from "../assets/petslogo.png";
import charityIcon from "../assets/charityLogo.png";
import religiousIcon from "../assets/religious.png";
import sportsIcon from "../assets/sports.png";

// Import Components
import DisasterRelief from "../pages/DisasterRelief";
import MedicalHealth from "../pages/MedicalHealth";
import Fraternities from "../pages/Fraternities";
import Education from "../pages/Education";
import PetsAnimals from "../pages/PetsAnimals";
import Religious from "../pages/Religious";
import Charity from "../pages/Charity";
import SportsTeams from "../pages/SportsTeams";

const categories = [
  { name: "Disaster Relief", image: disasterIcon, component: <DisasterRelief />, id: "disaster" },
  { name: "Medical & Health", image: medicalIcon, component: <MedicalHealth />, id: "medical" },
  { name: "Fraternities & Sororities", image: fraternityIcon, component: <Fraternities />, id: "fraternities" },
  { name: "Education", image: educationIcon, component: <Education />, id: "education" },
  { name: "Pets & Animals", image: petsIcon, component: <PetsAnimals />, id: "pets" },
  { name: "Religious", image: religiousIcon, component: <Religious />, id: "religious" },
  { name: "Charity", image: charityIcon, component: <Charity />, id: "charity" },
  { name: "Sports & Teams", image: sportsIcon, component: <SportsTeams />, id: "sports" },
];

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sectionRef = useRef(null);

  const handleVisitClick = (category) => {
    setSelectedCategory(category);
    
    // Delay scrolling slightly to ensure the component is rendered first
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="join-us-container">
      <h2>AltruMitra Supports</h2>
      <div className="grid-container">
        {categories.map((category, index) => (
          <div key={index} className="category-box">
            <img src={category.image} alt={category.name} className="clickable-image" />
            <span className="category-name">{category.name}</span>
            <button className="btn btn-primary supp-but" onClick={() => handleVisitClick(category)}>
              Visit
            </button>
          </div>
        ))}
      </div>

      {/* Render the selected category component below & add a ref for scrolling */}
      {selectedCategory && (
        <div ref={sectionRef} id={selectedCategory.id} className="selected-category-container">
          <h3>{selectedCategory.name}</h3>
          {selectedCategory.component}
        </div>
      )}
    </div>
  );
};

export default Support;
