import React from 'react';
import './ProjectPage.css';

const WorldWise = () => {
  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🌍 WorldWise - Personal Travel Tracker</h1>
            <p className="project-subtitle">
              A modern React application that helps travelers keep track of cities they've visited around the world
            </p>
            <div className="project-links">
              <a href="https://github.com/boyangeorgiev25/worldwise" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="bx bxl-github"></i> View Code
              </a>
              <a href="https://worldwise-travel-tracker.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="bx bx-globe"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-content">
          <section className="project-section" id="features">
            <h2>✨ Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>User Authentication</h3>
                <p>Secure user registration and login system with protected routes and session management</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🗺️</div>
                <h3>Personal Travel Journal</h3>
                <p>Track cities you've visited with detailed information and personal notes</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Modern UI/UX</h3>
                <p>Clean, responsive design with intuitive navigation and real-time form validation</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💾</div>
                <h3>Data Persistence</h3>
                <p>Local storage for user data and preferences with persistent login sessions</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="screenshots">
            <h2>📸 Preview & Screenshots</h2>
            <div className="screenshots-grid">
              <div className="screenshot-item">
                <img src="/images/WorldWise1.png" alt="WorldWise Login Screen" />
                <div className="screenshot-caption">
                  <p>Login Screen</p>
                  <span>User authentication interface</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img src="/images/WorldWise2.png" alt="WorldWise Interactive Map" />
                <div className="screenshot-caption">
                  <p>Interactive Map</p>
                  <span>Travel tracking dashboard</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img src="/images/WorldWise3.png" alt="WorldWise Travel Journal" />
                <div className="screenshot-caption">
                  <p>Travel Journal</p>
                  <span>Personal travel history</span>
                </div>
              </div>
            </div>
          </section>


          <section className="project-section" id="highlights">
            <h2>🚀 Key Highlights</h2>
            <div className="highlights">
              <div className="highlight-item">
                <h4>State Management Excellence</h4>
                <p>Implemented with React Context API and useReducer for efficient state handling</p>
              </div>
              <div className="highlight-item">
                <h4>User-Centric Design</h4>
                <p>Personal user accounts with unique avatars and data isolation between users</p>
              </div>
              <div className="highlight-item">
                <h4>Interactive Experience</h4>
                <p>Interactive map interface for travel planning with location coordinates</p>
              </div>
              <div className="highlight-item">
                <h4>Production Ready</h4>
                <p>Docker containerization with multi-stage builds for consistent deployment</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default WorldWise;