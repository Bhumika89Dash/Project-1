import React from 'react';
import './DivisionOne.css';
import { FaDonate, FaClock, FaUsers } from "react-icons/fa";

const DivisionOne = () => {
  return (
    <div>
      {/* Highlight Section */}
      <div className="highlight-section">
        <div className="left-content">
          <h2 id="left-text">Millions are making a difference with AltruMitra.</h2>
        </div>
        <div className="right-content">
          <p>
            Raise funds effortlessly with our powerful tools—craft a compelling
            story, share with the world, and watch kindness grow!
          </p>
        </div>
      </div>

      {/* Jumbotron Section */}
      <div id="jumbo" className="jumbotron">
        <div className="fundraising-container">
          <div className="fundraising-item">
            <FaDonate className="icon" />
            <span>No fee to start fundraising</span>
          </div>
          <span className="separator">|</span>
          <div className="fundraising-item">
            <FaClock className="icon" />
            <span>1 donation made every second</span>
          </div>
          <span className="separator">|</span>
          <div className="fundraising-item">
            <FaUsers className="icon" />
            <span>Direct Help to People in Need</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivisionOne;
