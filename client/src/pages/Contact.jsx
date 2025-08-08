import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Please fill out the form below.</p>
      </section>

      {/* Contact Form + Details */}
      <section className="contact-container">
        <div className="contact-form slide-up">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-details fade-in">
  <h2>Get in Touch</h2>
  <p className="contact-intro">
    We value your voice! Whether you have questions, want to volunteer, or share your ideas, we’re here to connect.
  </p>

  <div className="contact-info">
    <div className="contact-card">
      <h4>📍 Address</h4>
      <p>123 Main Street, City, Country</p>
      <a href="https://maps.google.com" target="_blank" rel="noreferrer">View on Map</a>
    </div>
    <div className="contact-card">
      <h4>📞 Phone</h4>
      <p>+91 9876543210</p>
      <a href="tel:+919876543210">Call Now</a>
    </div>
    <div className="contact-card">
      <h4>📧 Email</h4>
      <p>contact@example.com</p>
      <a href="mailto:contact@example.com">Send Email</a>
    </div>
  </div>

  <div className="social-links">
    <a href="#">🌐 Website</a>
    <a href="#"><i class="fa-brands fa-facebook"></i>Facebook</a>
    <a href="#"><i class="fa-brands fa-square-x-twitter"></i> Twitter</a>
    <a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a>
  </div>

  <div className="newsletter">
    <h4>📩 Subscribe for Updates</h4>
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
  </div>
</div>

      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us on Map</h2>
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
