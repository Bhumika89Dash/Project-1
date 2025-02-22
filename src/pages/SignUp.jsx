import  { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css"; // Custom styles for Sign Up page

const SignUp = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 id="signup-title"className="signup-title">Sign Up</h2>
        <form>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-4 col-form-label">Full Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label">Email Address</label>
            <div className="col-sm-8">
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
              <input type="password" className="form-control" id="password" placeholder="Create a password" required />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="confirmPassword" className="col-sm-4 col-form-label">Confirm Password</label>
            <div className="col-sm-8">
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
          </div>

          <button type="submit" id="sign-up-btn" className="btn btn-primary w-100 mt-3">Sign Up</button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
