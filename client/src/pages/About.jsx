// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content"> 
        <div className="about-header">
          <h1 className="animate-slide">About the Politician</h1>
          <p>
            Our leader is a visionary who believes in inclusive development, transparency, and youth empowerment.
            With a deep understanding of grassroots issues, they are focused on transforming society through progressive
            policies and community engagement.
          </p>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.3MlF1Rf2e2tZmY_3qvt2KwHaEK?pid=Api&P=0&h=180"
            alt="Political Leader"
            className="leader-img"
          />
        </div>

        <div className="key-values">
          <h2>Key Values</h2>
          <ul>
            <li>🗳️ Commitment to democracy</li>
            <li>🤝 Strong community engagement</li>
            <li>📢 Transparent governance</li>
            <li>🌱 Sustainable development goals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
