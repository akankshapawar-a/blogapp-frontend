import react from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react'
// import { Navbar } from './Navbar/Navbar';

export const App = () => {
  return (
    <div>
        <Router>
            <Routes>
            {/* <Route path="/" element={<Navbar/>}/> */}
            </Routes>
        </Router>
        
    </div>
  )
}
