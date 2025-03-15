import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Our Beautiful Works</h2>
      <p>We help our clients grow their business with our work and professional websites.</p>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/placeholder1.jpg" alt="Design work" />
        </div>
        <div className="portfolio-item">
          <img src="/placeholder2.jpg" alt="Design work" />
        </div>
        <div className="portfolio-item">
          <img src="/placeholder3.jpg" alt="Design work" />
        </div>
        <div className="portfolio-item">
          <img src="/placeholder4.jpg" alt="Design work" />
        </div>
        <div className="portfolio-item">
          <img src="/placeholder5.jpg" alt="Design work" />
        </div>
        <div className="portfolio-item">
          <img src="/placeholder6.jpg" alt="Design work" />
        </div>
      </div>
      <button className="button-secondary">Load More</button>
    </section>
  );
}; 