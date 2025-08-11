import React from 'react';
import './ProjectPage.css';

const FarAway = () => {
  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🧳 Far Away – Packing List App</h1>
            <p className="project-subtitle">
              A simple, interactive packing list built with React. Perfect for practicing state management and component structure.
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
            <h2>✨ Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>Add Items</h3>
                <p>Add items with quantity and description for your packing list</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Mark as Packed</h3>
                <p>Check off items as packed with interactive checkboxes</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🗑️</div>
                <h3>Delete Items</h3>
                <p>Remove individual items or clear the entire list</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Smart Sorting</h3>
                <p>Sort by input order, description, or packed status</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Live Statistics</h3>
                <p>Track total items vs. packed items with real-time updates</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚮</div>
                <h3>Clear All</h3>
                <p>Reset your packing list with a single click</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="screenshots">
            <h2>📸 App Preview</h2>
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
            <h2>🎯 Learning Objectives</h2>
            <div className="highlights">
              <div className="highlight-item">
                <h4>State Management</h4>
                <p>Practice managing component state and lifting state up for shared data</p>
              </div>
              <div className="highlight-item">
                <h4>Component Structure</h4>
                <p>Learn proper component composition and separation of concerns</p>
              </div>
              <div className="highlight-item">
                <h4>Props & Events</h4>
                <p>Master passing data between components and handling user interactions</p>
              </div>
              <div className="highlight-item">
                <h4>Array Methods</h4>
                <p>Utilize JavaScript array methods for sorting, filtering, and manipulation</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="deep-dive">
            <h2>🚀 Key Features Deep Dive</h2>
            <div className="feature-details">
              <div className="feature-detail">
                <h4>Dynamic Item Management</h4>
                <p>Add items with customizable quantities and descriptions. Each item is tracked with a unique ID and maintains its state throughout the application lifecycle.</p>
              </div>
              <div className="feature-detail">
                <h4>Interactive Sorting System</h4>
                <p>Multiple sorting options allow users to organize their packing list by input order, alphabetical description, or packed status for better organization.</p>
              </div>
              <div className="feature-detail">
                <h4>Real-time Progress Tracking</h4>
                <p>Live statistics display shows the ratio of packed vs. total items, helping users track their packing progress at a glance.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default FarAway;