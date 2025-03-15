import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Simple pricing to level up your brand.</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Standard</h3>
          <div className="price">$2,995/m</div>
          <ul className="features-list">
            <li>Unlimited requests</li>
            <li>Unlimited revisions</li>
            <li>Dedicated designer</li>
            <li>Next day delivery</li>
            <li>Source files included</li>
          </ul>
          <button className="button-secondary">Start trial</button>
        </div>
        <div className="pricing-card featured">
          <h3>Growth</h3>
          <div className="price">$4,795/m</div>
          <ul className="features-list">
            <li>Everything in Standard</li>
            <li>Premium support</li>
            <li>Priority delivery</li>
            <li>Advanced features</li>
            <li>Custom solutions</li>
          </ul>
          <button className="button-primary">Start trial</button>
        </div>
        <div className="pricing-card">
          <h3>Basic - Weekly</h3>
          <div className="price">$890/w</div>
          <ul className="features-list">
            <li>2 requests at a time</li>
            <li>48h delivery</li>
            <li>Basic support</li>
            <li>Source files</li>
            <li>Weekly updates</li>
          </ul>
          <button className="button-secondary">Start trial</button>
        </div>
      </div>
    </section>
  );
}; 