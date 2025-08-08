// src/pages/Gallery.jsx
import React from 'react';

const Gallary = () => {
  const images = [
    "https://tse3.mm.bing.net/th/id/OIP.6tmkRzOiWh36lGCefZyFiQHaEd?pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th/id/OIP.Nao3KVnSsqFzR6151NyfTgHaEK?pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th/id/OIP.3ueov9ps3TM3qDQYJ1-bRQHaD4?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.9MabA1il3TyX9ETmltJKQgHaFf?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.GPbOFIi8iKeLvcLbL8gAwgHaEK?pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th/id/OIP.x7fdtYOCyPds4O_p5VHB4QHaFj?pid=Api&P=0&h=180",
  ];

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Photo Gallery</h1>
      <p className="gallery-subtitle">
        A glimpse into the inspiring moments, events, and journeys led by our visionary leader.
      </p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item fade-in" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
