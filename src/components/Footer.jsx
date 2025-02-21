import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo1 from "../assets/logo12.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer jumbotron">
      <div className="container">
        <div className="row">
          
          {/* First Column - Logo & Description */}
          <div className="col-md-4">
            <img src={logo1} alt="AltruMitra Logo" className="footer-logo" />
            <p className="footer-text">
              AltruMitra is dedicated to providing you with the tools you need to raise money for whatever your cause may be.
            </p>
          </div>

          {/* Second Column - About Us */}
          <div className="col-md-4">
            <h5>ABOUT US</h5>
            <div className="row">
              <div className="col">
                <ul className="footer-links">
                  <li><a href="#">Fundraising Ideas</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className="col">
                <ul className="footer-links">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Column - Follow Us */}
          <div className="col-md-4">
            <h5>FOLLOW US</h5>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank"><FaFacebook /> Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank"><FaTwitter /> Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank"><FaInstagram /> Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank"><FaLinkedin /> LinkedIn</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
