import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={"https://image.freepik.com/free-vector/politician-icon-logo-element-illustration-politician-symbol-design-from-2-colored-collection-simple-politician-concept-can-be-used-web-mobile_159242-5122.jpg"} alt="MyPolitician Logo" className="logo-img" />
          </Link>
        </div>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li><NavLink to="/" exact="true">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/vision">Vision</NavLink></li>
          <li><NavLink to="/gallary">Gallary</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
