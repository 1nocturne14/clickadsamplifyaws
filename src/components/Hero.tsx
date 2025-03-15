import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>
        Bringing Your<br />
        Dream Into <span className="highlight">Reality</span>
      </h1>
      <p>We help transform your dreams into stunning digital designs through beautiful, thoughtful websites.</p>
      <button className="button-primary">Start a Project</button>
      <div className="trusted-brands">
        <p>TRUSTED BY AMAZING BRANDS</p>
        <div className="brand-logos">
          <span>Layers</span>
          <span>Quotient</span>
          <span>Circooles</span>
          <span>Hourglass</span>
          <span>Command+R</span>
        </div>
      </div>
    </section>
  );
}; 