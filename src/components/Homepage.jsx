import React from 'react';
import './Homepage.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';

const Homepage = () => {
  const handleViewProjects = () => {
    // Open GitHub in a new tab
    window.open('https://github.com/SobikaMageshwaren', '_blank');

    // Scroll to the Projects section
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WELCOME</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <div className="hero-box">
            <div className="hero-text">
              <h1>
                Hi, I'm <span className="highlight">SOBIKA MAGESHWAREN</span>
              </h1>
              <p className="headline">AI & ML Enthusiast</p>
              <p className="subtitle">
                Machine Learning • Deep Learning • Data Science • Computer Vision
              </p>
              <button className="cta-button" onClick={handleViewProjects}>
                View Projects
              </button>
            </div>

            <div className="profile-image">
              <img src="/sobi.jpg" alt="Sobika Mageshwaren" />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about">
        <AboutMe />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      <div id="certifications">
  <Certifications />
</div>

<div id="contact">
  <Contact />
</div>
    </section>
  );
};

export default Homepage;
