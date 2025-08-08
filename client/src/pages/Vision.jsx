// src/pages/Vision.jsx
import React from 'react';

const Vision = () => {
  return (
    <div className="vision-wrapper">
      <h1 className="vision-title">Our Vision for a Better Tomorrow</h1>
      <p className="vision-subtitle">
        We are committed to building a progressive, inclusive, and empowered nation. Our leader envisions a future where every individual has equal access to opportunity, justice, education, and development.
      </p>

      <div className="vision-sections">

        <div className="vision-section card-animate">
          <h2>📚 Universal Education</h2>
          <p>
            Every child, regardless of their background, deserves access to free, quality education.
            Our plan includes building more schools, investing in teacher training, and promoting digital literacy.
          </p>
        </div>

        <div className="vision-section card-animate delay-1">
          <h2>💼 Empowered Youth & Jobs</h2>
          <p>
            By investing in skill development, startups, and small businesses, we will create jobs and empower youth to lead the economy forward with innovation and entrepreneurship.
          </p>
        </div>

        <div className="vision-section card-animate delay-2">
          <h2>🏥 Healthcare for All</h2>
          <p>
            Healthcare is a right, not a privilege. We aim to set up more primary health centers, ensure affordable medicine, and increase investment in mental health and rural health services.
          </p>
        </div>

        <div className="vision-section card-animate delay-3">
          <h2>🌱 Green India, Clean India</h2>
          <p>
            Sustainability is at the heart of our mission. We’re promoting green energy, banning harmful plastics, and increasing forest cover to combat climate change.
          </p>
        </div>

        <div className="vision-section card-animate delay-4">
          <h2>🔍 Transparent Governance</h2>
          <p>
            An accountable government is the backbone of democracy. We believe in e-governance, open data, and citizen participation to build trust and efficiency.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Vision;
