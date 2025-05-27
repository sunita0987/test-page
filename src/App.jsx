import { useState } from 'react'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './components/ProfileCard';
import SimpleSlide from './pages/SimpleSlide';
import CounterApp from './pages/CounterApp';
import './App.css'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <>
              <div className="flex justify-center mb-10">
                <Profile
                  name="sunita verma"
                  bio=" frontend developer"
                  contact="sunitaverma@gmail.com"
                />
              </div>
           
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view" element={< SimpleSlide />} />
        <Route path="/counter" element={< CounterApp />} />
      </Routes>
    </div>
  );
};

export default App
