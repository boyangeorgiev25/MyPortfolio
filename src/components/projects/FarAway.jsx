import React from 'react';
import './ProjectPage.css';

// Simple packing list app - my first real React project
function FarAway() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🧳 Far Away – Packing List App</h1>
            <p className="project-subtitle">
              Super simple packing list I built while learning React. You add stuff, check it off when packed, and it keeps track of everything for you.
            </p>
            <div className="project-links">
              <a href="https://github.com/boyangeorgiev25/far-away" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="bx bxl-github"></i> View Code
              </a>
              <a href="https://far-away-packing-list.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-secondary">
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
                <div className="feature-icon">✅</div>
                <h3>Add stuff</h3>
                <p>Type in what you need to pack and how many</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Check things off</h3>
                <p>Click the box when you've packed something</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🗑️</div>
                <h3>Delete stuff</h3>
                <p>Get rid of things you don't need anymore</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Sort your list</h3>
                <p>Organize by when you added it, name, or if it's packed</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Shows your progress</h3>
                <p>See how much you've packed vs how much is left</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚮</div>
                <h3>Start over</h3>
                <p>Clear everything if you want to start fresh</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="screenshots">
            <h2>📸 How it looks</h2>
            <div className="screenshots-grid">
              <div className="screenshot-item">
                <img src="/images/travel.png" alt="Far Away Packing List App" />
                <div className="screenshot-caption">
                  <p>Packing List Interface</p>
                  <span>Add, sort, and manage your travel items</span>
                </div>
              </div>
            </div>
          </section>

          <section className="project-section" id="learning">
            <h2>🎯 What I learned making this</h2>
            <div className="highlights">
              <div className="highlight-item">
                <h4>Managing data</h4>
                <p>Figuring out how to keep track of all the items and their status</p>
              </div>
              <div className="highlight-item">
                <h4>Breaking things down</h4>
                <p>How to split the app into different pieces that work together</p>
              </div>
              <div className="highlight-item">
                <h4>Talking between components</h4>
                <p>Getting components to share data and respond to clicks</p>
              </div>
              <div className="highlight-item">
                <h4>JavaScript arrays</h4>
                <p>Using map, filter, sort - all that array stuff I was scared of before</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="deep-dive">
            <h2>🚀 The technical stuff</h2>
            <div className="feature-details">
              <div className="feature-detail">
                <h4>Adding and tracking items</h4>
                <p>Each thing you add gets its own ID so the app can keep track of it. Took me a while to understand how that worked.</p>
              </div>
              <div className="feature-detail">
                <h4>Different ways to sort</h4>
                <p>You can sort by when you added stuff, alphabetically, or by what's packed. The sorting logic was tricky to get right.</p>
              </div>
              <div className="feature-detail">
                <h4>Progress tracking</h4>
                <p>Shows you how much you've got left to pack. Updates instantly when you check stuff off - felt pretty cool when I got that working.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default FarAway;