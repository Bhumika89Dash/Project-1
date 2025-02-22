import React from "react";
import "./LogoCode.css";
import { FaHandHoldingHeart } from "react-icons/fa"; // Change this icon for different meanings

const LogoCode = () => {
  return (
    <div className="logo-container">
      <div className="symbol">
        <FaHandHoldingHeart />
      </div>
      <div className="logo-text">AltruMitra</div>
    </div>
  );
};

export default LogoCode;