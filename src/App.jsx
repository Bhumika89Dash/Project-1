import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<Support />} /> {/* Fixed component name */}
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



