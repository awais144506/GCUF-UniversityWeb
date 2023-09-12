"use client"
import React, { useState, useEffect } from 'react';
import AllEvents from './Pages/AllEvents';
import AllNews from './Pages/AllNews';
import HomePage from './Pages/HomePage'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ComputerScience from './Pages/Departments/ComputerScience';
import SoftwareEngineering from './Pages/Departments/SoftwareEngineering';
import HND from './Pages/Departments/HND';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching initial data)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Set loading to false after 2 seconds (adjust as needed)
  }, []);

  return (
    <>
      {loading ? (
        // Display LoadingPage while loading
        <div className="flex items-center justify-center h-screen">
          <div className="text-lg font-semibold mb-4 mr-3">Loading...</div>
          <div className="border-t-4 border-gray-300 border-dashed animate-spin rounded-full w-12 h-12"></div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AllEvents" element={<AllEvents />} />
            <Route path="/AllNews" element={<AllNews />} />
            <Route path="/ComputerScience" element={<ComputerScience />} />
            <Route path="/SoftwareEngineering" element={<SoftwareEngineering />} />
            <Route path="/HumanNutrition&Dietetics" element={<HND />} />
            <Route path="/SoftwareEngineering" element={<SoftwareEngineering />} />
            <Route path="/SoftwareEngineering" element={<SoftwareEngineering />} />
          </Routes>
        </Router>
      )}
    </>
  )
}
