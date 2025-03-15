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
      <footer>
        <p>© 2024 ClickAds Marketing - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;