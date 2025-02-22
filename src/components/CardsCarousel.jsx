import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./CardsCarousel.css"; // Import CSS for styling
import image1 from "../assets/charityfood.jpg"; // Import images for campaigns
import image2 from "../assets/medicalaid.jpg";
import image3 from "../assets/education.jpg";
// Sample Campaign Data
const campaigns = [
  { name: "Food for All", image: image1, raised: 70, goal: 1000, link: "/campaign/food" },
  { name: "Medical Aid", image: image2, raised: 50, goal: 2000, link: "/campaign/medical" },
  { name: "Education Drive", image: image3, raised: 30, goal: 1500, link: "/campaign/education" },
];

const CardsCarousel = () => {
  return (
    <div id="uniquedonations" className="container cards-container">
        <br></br>
        <br></br>
        <h1 className="text-center mb-4">Donations Made Through Us..</h1>
        <br></br>
    <div className="row g-4">
      {campaigns.map((campaign, index) => (
        <div key={index} className="col-md-4 d-flex"> {/* Ensures all cards align properly */}
          <div className="card campaign-card d-flex flex-column">
            <img src={campaign.image} className="card-img-top campaign-img" alt={campaign.name} />
            <div className="card-body d-flex flex-column ">
              <h5 className="card-title">{campaign.name}</h5>
              <div className="progress">
                <div
                  className="progress-bar  bg-success"
                  role="progressbar"
                  style={{ width: `${campaign.raised}%` }}
                  aria-valuenow={campaign.raised}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  
                >
                  {campaign.raised}%
                </div>
              </div>
              <p className="amount-required">Goal: ${campaign.goal}</p>
              <Link to={campaign.link} className="btn btn-primary w-100 mt-auto donate-button">
                Donate
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  );
};

export default CardsCarousel;
