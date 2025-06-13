import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleLocationClick = () => {
    const confirmMap = window.confirm("Do you want to view this on Maps?");
    if (confirmMap) {
      window.open("https://www.google.com/maps?q=Coimbatore+Tamil+Nadu", "_blank");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>📬 Get in Touch</h2>
      <p className="contact-subtitle">Let’s connect and build something amazing together!</p>

      <div className="contact-links">
        <div className="contact-card fade-in-up clickable" onClick={handleLocationClick}>
          <FaMapMarkerAlt className="contact-icon" />
          <span>Coimbatore, Tamil Nadu</span>
        </div>

        <a
          href="mailto:sobikamageshwaren@gmail.com"
          className="contact-card fade-in-up"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
          <span>sobikamageshwaren@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sobika-mageshwaren-5b1973318/"
          className="contact-card fade-in-up"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/SobikaMageshwaren"
          className="contact-card fade-in-up"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
