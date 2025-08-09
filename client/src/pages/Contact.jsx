import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setSuccessMessage(response.data.message);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.response.data.error || 'Something went wrong!');
            setSuccessMessage('');
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you. Please fill out the form below.</p>
            </section>
            <section className="contact-container">
                <div className="contact-form slide-up">
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
                        <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} />
                        <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange}></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    {successMessage && <p>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
                        <a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a>
                        <a href="#"><i className="fa-brands fa-square-x-twitter"></i> Twitter</a>
                        <a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
                    </div>
                    <div className="newsletter">
                        <h4>📩 Subscribe for Updates</h4>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
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