import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-divider"></div>
      <div className="about-img">
        <div className="image-wrapper">
          <img src="images/AboutMe1.png" alt="Boyan Georgiev" />
          <div className="image-overlay">
            <div className="overlay-content">
              <i className="bx bx-code-alt"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="content-header">
          <h2 className="heading">About <span>Me</span></h2>
          <div className="section-subtitle">Get to know me better</div>
        </div>
        
        <div className="intro-card">
          <h3>
            Hi there, welcome to my digital space! I'm Boyan,
            a passionate web developer who thrives on learning new technologies
            and crafting solutions through code.
          </h3>
        </div>

        <div className="about-details">
          <div className="detail-item">
            <div className="detail-icon">
              <i className="bx bx-code"></i>
            </div>
            <div className="detail-content">
              <h4>Web Development</h4>
              <p>
                Building modern, responsive websites and applications using the latest technologies.
                My focus is on creating user-friendly experiences that make a difference.
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
                Currently studying at Karel de Grote University College (KDG), constantly expanding
                my knowledge in web development, design patterns, and emerging technologies.
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
                I believe in the power of technology to solve real-world problems and create
                meaningful digital experiences that inspire and engage users.
              </p>
            </div>
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