import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <Router>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
