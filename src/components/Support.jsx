import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Support.css";
import disasterIcon from "../assets/disastericon.png";
import fraternityIcon from "../assets/franlogo.png";
import educationIcon from "../assets/educationlogo.png";
import medicalIcon from "../assets/medicallogo.png";
import petsIcon from "../assets/petslogo.png";
import charityIcon from "../assets/charityLogo.png";
import religiousIcon from "../assets/religious.png";
import sportsIcon from "../assets/sports.png";

const categories = [
  { name: "Disaster Relief", image: disasterIcon, link: "/disaster-relief" },
  { name: "Medical & Health", image: medicalIcon, link: "/medical-health" },
  { name: "Fraternities & Sororities", image: fraternityIcon, link: "/fraternities" },
  { name: "Education", image: educationIcon, link: "/education" },
  { name: "Pets & Animals", image: petsIcon, link: "/pets-animals" },
  { name: "Religious", image: religiousIcon, link: "/religious" },
  { name: "Charity", image: charityIcon, link: "/charity" },
  { name: "Sports & Teams", image: sportsIcon, link: "/sports-teams" },
];

const Support = () => {
  return (
    <div className="join-us-container">
      <h2>AltruMitra Supports</h2>
      <div className="grid-container">
        {categories.map((category, index) => (
          <div key={index} className="category-box">
            <Link to={category.link}>
              <img src={category.image} alt={category.name} className="clickable-image" />
            </Link>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
