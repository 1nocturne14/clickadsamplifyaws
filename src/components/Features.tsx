import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <h2>We can help you with...</h2>
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h3>On-demand requests</h3>
          <p>Get your design needs fulfilled quickly and efficiently.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎯</div>
          <h3>Top-notch quality</h3>
          <p>Premium designs that elevate your brand presence.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔄</div>
          <h3>Seamless workflow</h3>
          <p>Smooth collaboration and revision process.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h3>Creative expertise</h3>
          <p>Access to skilled designers for your projects.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h3>Fast turnaround</h3>
          <p>Quick delivery without compromising quality.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🌟</div>
          <h3>Expert Network</h3>
          <p>Connect with industry-leading professionals.</p>
        </div>
      </div>
    </section>
  );
}; 