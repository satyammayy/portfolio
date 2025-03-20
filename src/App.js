// src/App.js
import React from 'react';
import Hero from './components/pages/Hero';
import About from './components/pages/About'; // Import the About component
import Achievement from './components/pages/Achievement'; // Import the Achievement component
//import Projects from './components/Projects';
//import Certificates from './components/Certificates';
//import Skills from './components/Skills';
//import Contact from './components/Contact';
//import Footer from './components/Footer';
import './App.css';

function App() {
 return (
  <div>
   <Hero />
   <About />
    <Achievement/>
  </div>
 );
}

export default App;