import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-divider"></div>

      <div className="about-content">
        <div className="content-header">
          <h2 className="heading">About <span>Me</span></h2>
          <div className="section-subtitle">Get to know me better</div>
        </div>
        
        <div className="intro-card">
          <h3>
            Hi! I'm Boyan, a passionate software developer who loves creating modern web applications.
          </h3>
        </div>

        <div className="about-gallery">
          <div className="gallery-container">
            <div className="gallery-track">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bx bx-code"></i>
                </div>
                <div className="detail-content">
                  <h4>Web Development</h4>
                  <p>
                    Building responsive websites and applications with modern technologies.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bx bx-book-reader"></i>
                </div>
                <div className="detail-content">
                  <h4>Continuous Learning</h4>
                  <p>
                    Studying at Karel de Grote University College, expanding knowledge in web development.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bx bx-heart"></i>
                </div>
                <div className="detail-content">
                  <h4>Passion for Innovation</h4>
                  <p>
                    Using technology to solve problems and create meaningful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="gallery-indicators">
            <div className="gallery-dot"></div>
            <div className="gallery-dot"></div>
            <div className="gallery-dot"></div>
          </div>
        </div>

        <div className="cta-container">
          <Link to="/about-me" className="btn btn-about">Discover My Journey</Link>
          <div className="quick-facts">
            <span className="fact-item">🎓 KDG Student</span>
            <span className="fact-item">💻 Web Developer</span>
            <span className="fact-item">🚀 Problem Solver</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;