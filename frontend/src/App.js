import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import FinancialData from './components/FinancialData';
import Contact from './components/Contact';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [servicesData, setServicesData] = useState([]);
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/data')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error fetching data'));

    fetch('http://localhost:8000/api/services')
      .then(response => response.json())
      .then(data => setServicesData(data))
      .catch(error => console.error('Error fetching services:', error));
    
    fetch('http://localhost:8000/api/financial-data')
      .then(response => response.json())
      .then(data => setFinancialData(data))
      .catch(error => console.error('Error fetching financial data:', error));
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home message={message} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services data={servicesData} />} />
          <Route path="/financial-data" element={<FinancialData data={financialData} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
