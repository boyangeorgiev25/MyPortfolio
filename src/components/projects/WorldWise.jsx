import React from "react";
import "../../styles/components/project-page.css";

// Built this travel tracker after getting tired of losing track of places I've been
function WorldWise() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">
              🌍 WorldWise - Personal Travel Tracker
            </h1>
            <p className="project-subtitle">
              Keep track of all the places you've been. I made this because I 
              kept forgetting which cities I'd already visited on my trips.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/boyangeorgiev25/worldwise"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="bx bxl-github"></i> View Code
              </a>
              <a
                href="https://worldwise-travel-tracker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="bx bx-globe"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-content">
          <section className="project-section" id="features">
            <h2>✨ What it does</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>Login system</h3>
                <p>
                  You need to log in to use it - each person gets their own 
                  travel list so your data stays private
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🗺️</div>
                <h3>Your travel diary</h3>
                <p>
                  Click on cities you've been to and add your own notes about 
                  what you did there
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Clean interface</h3>
                <p>
                  I tried to keep it simple and not overwhelming - just the 
                  features you actually need
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💾</div>
                <h3>Saves your stuff</h3>
                <p>
                  Everything gets saved locally so you don't lose your data 
                  when you close the browser
                </p>
              </div>
            </div>
          </section>

          <section className="project-section" id="screenshots">
            <h2>📸 How it looks</h2>
            <div className="screenshots-grid">
              <div className="screenshot-item">
                <img
                  src="/images/WorldWise1.png"
                  alt="WorldWise Login Screen"
                />
                <div className="screenshot-caption">
                  <p>The main map view</p>
                  <span>Where you track your travels</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img
                  src="/images/WorldWise2.png"
                  alt="WorldWise Interactive Map"
                />
                <div className="screenshot-caption">
                  <p>Homepage</p>
                  <span>Simple and clean</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img
                  src="/images/WorldWise3.png"
                  alt="WorldWise Travel Journal"
                />
                <div className="screenshot-caption">
                  <p>Login page</p>
                  <span>Quick and easy access</span>
                </div>
              </div>
            </div>
          </section>

          <section className="project-section" id="highlights">
            <h2>🚀 Technical stuff I learned</h2>
            <div className="highlights">
              <div className="highlight-item">
                <h4>Managing complex state</h4>
                <p>
                  Used React Context and useReducer to handle all the app data - 
                  took me a while to get it right
                </p>
              </div>
              <div className="highlight-item">
                <h4>User profiles</h4>
                <p>
                  Each user gets their own space with custom avatars - made sure 
                  people can't see each other's travel data
                </p>
              </div>
              <div className="highlight-item">
                <h4>Interactive maps</h4>
                <p>
                  The map lets you click anywhere to add cities - figuring out 
                  the coordinates was trickier than expected
                </p>
              </div>
              <div className="highlight-item">
                <h4>Deployment setup</h4>
                <p>
                  Set up Docker containers so it runs the same everywhere - 
                  learned about multi-stage builds too
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorldWise;
