import React from 'react';
import './Styles.css';
import Navbar from './components/Navbar.js';
import WeatherApp from './components/WeatherApp.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.js';


const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<WeatherApp />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<div>Contact Page</div>} />
        
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;
