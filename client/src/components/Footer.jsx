// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>My<span>Politician</span></h2>
          <p>Building a brighter, inclusive and transparent tomorrow.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/gallary">Gallary</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-x-twitter"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 MyPolitician. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
