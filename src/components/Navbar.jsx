/*
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import logo1 from "../assets/logo12.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div class="container-fluid">
   <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top px-4">
      <div className="container-fluid">
        {/* Logo }
        <a className="navbar-brand" href="#">
          <img src={logo1} alt="AltruMitra Logo" className="logo img-fluid" />
        </a>

        {/* Navbar Toggle Button for Small Screens }
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content }
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
          </ul>

          {/* Right Side }
          <ul className="navbar-nav ms-auto">
  <li className="nav-item sign-in-btn">
    <a className="nav-link" href="#">Sign In</a>
  </li>
  <li className="nav-item sign-up-btn">
    <a className="nav-link" href="#">Sign Up</a>
  </li>
</ul>

        </div>
      </div>
    </nav>
   
    </div>

  );
};
export default Navbar;
*/


import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo1 from "../assets/altrulogo.png";
import "./Navbar.css";
import LogoCode from "./LogoCode";

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top px-4">
      <div className="container-fluid">
        {/* Logo */}
        
        <LogoCode/>

        {/* Navbar Toggle Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Redirects to homepage */}
            </li>
          <li className="nav-item">
              
          <a className="nav-link" href="/about" target="_blank" rel="noopener noreferrer">About Us</a>
              </li>
              <li className="nav-item">
              
          <a className="nav-link" href="#footer-last">Contact Us</a>
              </li>
            <li className="nav-item">
            <a className="nav-link" href="#uniquedonations">Donate</a>

            </li>
            <li className="nav-item">
            <a className="nav-link" href="#uniqueblog">Blogs</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#Help">Help</a>
            </li>
            
          </ul>

          {/* Right Side */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item sign-in-btn">
              <Link className="nav-link" to="/signin">Sign In/Up</Link>
            </li>
            
          </ul>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;

