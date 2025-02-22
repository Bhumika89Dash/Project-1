import React from "react";
import "./SportsTeams.css";
import sportsImage from "../assets/teasup.jpg"; // Replace with actual image path

const SportsTeams = () => {
  return (
    <div id="sports-support" className="sports-container">
      <h2 className="sports-title">Support Sports & Teams</h2>
      <div className="sports-content">
        <img src={sportsImage} alt="Sports Support" className="sports-image" />
        <div className="sports-text">
          <p>
            Sports unite communities and inspire individuals. Our Sports & Teams Support Fund helps
            local teams, funds training programs, and provides equipment to aspiring athletes.
          </p>
          <a href="#sports-support" className="bookmark-link">
            <button id="team-btn"className="btn btn-primary">Support Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SportsTeams;
