import React from "react";
import "./LogoFooter.css";
import { FaHandHoldingHeart } from "react-icons/fa"; 
const LogoFooter = () => {
  return (
    <div className="logo-container">
      <div className="symbol">
        <FaHandHoldingHeart />
      </div>
      <div className="logo-text">AltruMitra</div>
    </div>
  );
};

export default LogoFooter;