import React from 'react';
import './ProjectDetail.css';

const DataVisualizationDashboard = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Data Visualization Dashboard</h1>
        <div className="project-meta">
          <span className="tech-stack">Python • Django • D3.js • PostgreSQL</span>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-images">
          <div className="main-image">
            <img src="/images/1.png" alt="Data Visualization Dashboard" />
          </div>
          <div className="additional-images">
            <img src="/images/1.png" alt="Data Visualization Dashboard - Charts" />
            <img src="/images/1.png" alt="Data Visualization Dashboard - Analytics" />
          </div>
        </div>
        
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>
            An interactive analytics dashboard that processes large datasets from multiple sources and 
            presents actionable insights through dynamic charts and visualizations. Built to handle 
            real-time data streams and provide customizable reporting capabilities.
          </p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Interactive charts and graphs with D3.js</li>
            <li>Real-time data processing and updates</li>
            <li>Multiple data source integration</li>
            <li>Customizable dashboard layouts</li>
            <li>Export functionality (PDF, Excel, CSV)</li>
            <li>User role-based access control</li>
            <li>Advanced filtering and drill-down capabilities</li>
          </ul>
          
          <h3>Technical Challenges</h3>
          <p>
            Main challenges included optimizing database queries for large datasets, implementing 
            efficient real-time data streaming, and creating responsive visualizations that perform 
            well with thousands of data points.
          </p>
          
          <h3>Technologies Used</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <strong>Backend:</strong> Python, Django, Django REST Framework
            </div>
            <div className="tech-item">
              <strong>Frontend:</strong> JavaScript, D3.js, Chart.js
            </div>
            <div className="tech-item">
              <strong>Database:</strong> PostgreSQL, Redis
            </div>
            <div className="tech-item">
              <strong>Data Processing:</strong> Pandas, NumPy, Celery
            </div>
            <div className="tech-item">
              <strong>Real-time:</strong> WebSockets, Django Channels
            </div>
          </div>
          
          <div className="project-links">
            <a href="#" className="btn">Live Demo</a>
            <a href="#" className="btn btn-outline">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationDashboard;