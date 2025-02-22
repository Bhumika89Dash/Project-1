import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About AltruMitra</h2>
        <p className="about-description">
          Welcome to <strong>AltruMitra</strong>, a platform dedicated to making a difference. 
          Our mission is to connect individuals, organizations, and causes to enable seamless and 
          impactful crowdfunding. Whether it's for a personal cause, a charitable initiative, 
          or an innovative startup, we provide a secure and transparent way to raise and contribute funds.
        </p>

        <h4 className="about-subtitle">Our Mission</h4>
        <p className="about-text">
          We strive to create an ecosystem where generosity meets need. 
          By leveraging technology and a strong community-driven approach, 
          we empower people to support causes they truly care about.
        </p>

        <h4 className="about-subtitle">Why Choose Us?</h4>
        <ul className="about-list">
          <li>✔️ Secure and transparent fundraising</li>
          <li>✔️ Easy-to-use platform for all users</li>
          <li>✔️ Support for diverse categories, from startups to charities</li>
          <li>✔️ Real-time tracking and updates on contributions</li>
          <li>✔️ 24/7 support to assist campaigners and donors</li>
        </ul>

        <h4 className="about-subtitle">Get Involved</h4>
        <p className="about-text">
          Whether you want to start a campaign or contribute to an existing one, 
          AltruMitra is here to make the process seamless and impactful. 
          Join us today and be a part of the change!
        </p>
      </div>
    </div>
  );
};

export default About;
