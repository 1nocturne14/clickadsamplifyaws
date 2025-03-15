import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio />
      <Features />
      <Pricing />
      <FAQ />
    </div>
  );
}

export default App;