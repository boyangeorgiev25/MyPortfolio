import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-divider"></div>

      <div className="about-content">
        <div className="content-header">
          <h2 className="heading">About <span>Me</span></h2>
          <div className="section-subtitle">The real story</div>
        </div>
        
        <div className="intro-card">
          <h3>
            Hey! I'm Boyan. I spend most of my time turning coffee into code and trying to build cool stuff that actually works.
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
                  <h4>Building websites</h4>
                  <p>
                    I make things that work on phones, computers, and everything in between. React is my jam.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bx bx-book-reader"></i>
                </div>
                <div className="detail-content">
                  <h4>Always learning</h4>
                  <p>
                    Currently studying at Karel de Grote. Every day I learn something new - tech moves fast!
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bx bx-heart"></i>
                </div>
                <div className="detail-content">
                  <h4>Problem solver</h4>
                  <p>
                    I like figuring out how to make things work better. Sometimes it's fixing bugs, sometimes building from scratch.
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