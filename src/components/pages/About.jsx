import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-divider"></div>

      <div className="about-content">
        <div className="content-header">
          <h2 className="heading">About <span>Me</span></h2>
          <div className="section-subtitle">Professional Background</div>
        </div>
        
        <div className="intro-card">
          <h3>
            I am Boyan Georgiev, a dedicated software developer focused on creating robust, user-centered applications and innovative digital solutions.
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
                    I specialize in creating responsive web applications that deliver seamless experiences across all devices, with particular expertise in React development.
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
                    Currently pursuing my studies at Karel de Grote University, where I continuously expand my technical knowledge to stay current with industry developments.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bx bx-heart"></i>
                </div>
                <div className="detail-content">
                  <h4>Problem Solving</h4>
                  <p>
                    I excel at analyzing complex challenges and developing efficient solutions, whether optimizing existing systems or architecting new applications from the ground up.
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
          <Link to="/about-me" className="btn btn-about">My full story</Link>
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