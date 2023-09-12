"use client"
import React, { useState, useEffect } from 'react';
import AllEvents from './Pages/AllEvents';
import AllNews from './Pages/AllNews';
import HomePage from './Pages/HomePage'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ComputerScience from './Pages/Departments/ComputerScience';
import SoftwareEngineering from './Pages/Departments/SoftwareEngineering';
import HND from './Pages/Departments/HND';
import InformationTechnology from './Pages/Departments/InfoTech';
import FoodScience from './Pages/Departments/FoodScience';
import BBA from './Pages/Departments/BBA';
import Accounting from './Pages/Departments/Accounting';
import Math from './Pages/Departments/Math';
import Physics from './Pages/Departments/Physics';
import Chemistry from './Pages/Departments/Chemistry';
import Contact from './Pages/Contact';
import Timetable from './Pages/Academics/Timetable';
import Datesheet from './Pages/Academics/Datesheet';
import Calender from './Pages/Academics/AcademicCalender';
import Prospectus from './Pages/Academics/Prospectus';
import MeritList from './Pages/Academics/MeritList';
import RoadMaps from './Pages/Academics/RoadMaps';
import AdmissionOffice from './Pages/Administration/AdmissionOffice';
import ControllerExamination from './Pages/Administration/ControllerExamination';
import Registrar from './Pages/Administration/Registrar';
import VCOffice from './Pages/Administration/VCOffice';

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
            <Route path="/InformationTechnology" element={<InformationTechnology />} />
            <Route path="/FoodScience" element={<FoodScience />} />
            <Route path="/BachelorofBusinessAdministration(BBA)" element={<BBA />} />
            <Route path="/Accounting&Finance" element={<Accounting />} />
            <Route path="/Mathematics" element={<Math />} />
            <Route path="/Physics" element={<Physics />} />
            <Route path="/Chemistry" element={<Chemistry />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/TimeTable" element={<Timetable/>} />
            <Route path="/DateSheet" element={<Datesheet/>} />
            <Route path="/AcademicCalender" element={<Calender/>} />
            <Route path="/Prospectus" element={<Prospectus/>} />
            <Route path="/MeritLists" element={<MeritList/>} />
            <Route path="/RoadMaps" element={<RoadMaps/>} />
            <Route path="/AdmissionOffice" element={<AdmissionOffice/>} />
            <Route path="/ControllerExamination" element={<ControllerExamination/>} />
            <Route path="/Registrar" element={<Registrar/>} />
            <Route path="/VCOffice" element={<VCOffice/>} />
            
          </Routes>
        </Router>
      )}
    </>
  )
}
