/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import DivisionOne from './components/DivisionOne';
import AltruMitraMeaning from './components/AltruMitraMeaning';
import Footer from './components/Footer';
import Support from './components/Support';
import DisasterRelief from "./pages/DisasterRelief";
import MedicalHealth from "./pages/MedicalHealth";
import Fraternities from "./pages/Fraternities";
import Education from "./pages/Education";
import PetsAnimals from "./pages/PetsAnimals";
import Religious from "./pages/Religious";
import Charity from "./pages/Charity";
import SportsTeams from "./pages/SportsTeams"; 




function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <div id="nav"><Navbar/></div>
      <div id="home"><Home/></div>
      <div id="division-one"><DivisionOne/></div>
      <div id="AltruMitraMeaning"><AltruMitraMeaning/></div>
      <div id="supports">
      <Router>
      <Routes>
        <Route path="/" element={<Support />} /> 
        <Route path="/disaster-relief" element={<DisasterRelief />} />
        <Route path="/medical-health" element={<MedicalHealth />} />
        <Route path="/fraternities" element={<Fraternities />} />
        <Route path="/education" element={<Education />} />
        <Route path="/pets-animals" element={<PetsAnimals />} />
        <Route path="/religious" element={<Religious />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/sports-teams" element={<SportsTeams />} />
      </Routes> 
    </Router>
        
      </div> 
       <div id="footer"><Footer /></div> 
      
    </div>
  
  
      
  )
}

export default App



 
 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

import Navbar from "./components/Navbar";
import Home1 from "./pages/Home1";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Support from './components/Support';
import DisasterRelief from "./pages/DisasterRelief";
import MedicalHealth from "./pages/MedicalHealth";
import Fraternities from "./pages/Fraternities";
import Education from "./pages/Education";
import PetsAnimals from "./pages/PetsAnimals";
import Religious from "./pages/Religious";
import Charity from "./pages/Charity";
import SportsTeams from "./pages/SportsTeams"; 
import Footer from './components/Footer';
import DivisionOne from './components/DivisionOne';
import AltruMitraMeaning from './components/AltruMitraMeaning';
function App() {
  return (
    <Router>
    <div id="nav">
    <Navbar /> {/* Navbar remains at the top 
    <div className="page-content"> {/* Wrapper to prevent overlap 
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
    </div>
    <div id="home"><Home/></div>
    <div id="division-one"><DivisionOne/></div>
    <div id="AltruMitraMeaning"><AltruMitraMeaning/></div>
    <div id="supports">
      
      <Routes>
        <Route path="/" element={<Support />} /> 
        <Route path="/disaster-relief" element={<DisasterRelief />} />
        <Route path="/medical-health" element={<MedicalHealth />} />
        <Route path="/fraternities" element={<Fraternities />} />
        <Route path="/education" element={<Education />} />
        <Route path="/pets-animals" element={<PetsAnimals />} />
        <Route path="/religious" element={<Religious />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/sports-teams" element={<SportsTeams />} />
      </Routes> 
    </div>
    
        
      
    <div id="footer"><Footer /></div>
  
  </Router>
  
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

import Navbar from "./components/Navbar";
import Home1 from "./pages/Home1";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Support from './components/Support';
import DisasterRelief from "./pages/DisasterRelief";
import MedicalHealth from "./pages/MedicalHealth";
import Fraternities from "./pages/Fraternities";
import Education from "./pages/Education";
import PetsAnimals from "./pages/PetsAnimals";
import Religious from "./pages/Religious";
import Charity from "./pages/Charity";
import SportsTeams from "./pages/SportsTeams"; 
import Footer from './components/Footer';
import DivisionOne from './components/DivisionOne';
import AltruMitraMeaning from './components/AltruMitraMeaning';
import CardsCarousel from "./components/CardsCarousel";
import Favicon from "./components/Favicon";
import Help from "./components/Help";

const FoodCampaign = () => <h2 className="text-center mt-4">Food for All Campaign Page</h2>;
const MedicalCampaign = () => <h2 className="text-center mt-4">Medical Aid Campaign Page</h2>;
const EducationCampaign = () => <h2 className="text-center mt-4">Education Drive Campaign Page</h2>;
function App() {
  return (
    <Router>
      <Favicon />
      <div id="nav">
        <Navbar /> 
      </div>
      <div className="page-content"> 
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/disaster-relief" element={<DisasterRelief />} />
          <Route path="/medical-health" element={<MedicalHealth />} />
          <Route path="/fraternities" element={<Fraternities />} />
          <Route path="/education" element={<Education />} />
          <Route path="/pets-animals" element={<PetsAnimals />} />
          <Route path="/religious" element={<Religious />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/sports-teams" element={<SportsTeams />} />
          <Route path="/campaign/food" element={<FoodCampaign />} />
          <Route path="/campaign/medical" element={<MedicalCampaign />} />
          <Route path="/campaign/education" element={<EducationCampaign />} />
        </Routes>
      </div>
      <div id="home"><Home /></div>
      <div id="division-one"><DivisionOne /></div>
      <div id="AltruMitraMeaning"><AltruMitraMeaning /></div>
      <div id="supports">
        <Support /> {/* Display support section directly */}
      </div>
      <div id="cardscarousel"><CardsCarousel /></div>
      <div id="Blog"><Blog /></div> 
      <Help />
      <div id="footer"><Footer /></div>
    </Router>
  );
}

export default App;