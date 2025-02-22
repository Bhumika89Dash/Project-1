import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="container">
      <div className="outer">       
        <div className="inner">
          <p className="home-head">Empower Change&nbsp;</p>
        
          
          
          
          

          <div className="button-container">
            <button className="primary-btn" onClick={() => navigate('/signin')}>
              Start a Fundraiser
            </button>
          </div>
          <p id="bottom-text">Join AltruMitra and be the reason <br></br> someone smiles today.&nbsp;</p>
        </div>
      </div>  
    </div>
  );
};

export default Home;
