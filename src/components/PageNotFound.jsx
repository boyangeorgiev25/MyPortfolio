import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter.jsx';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="not-found-background">
        <div className="background-shapes">
          <div className="bg-shape bg-shape-1"></div>
          <div className="bg-shape bg-shape-2"></div>
          <div className="bg-shape bg-shape-3"></div>
        </div>
      </div>
      
      <div className="not-found-content">
        <div className="error-code">
          <AnimatedCounter end="4" duration={1500} delay={300} />
          <AnimatedCounter end="0" duration={1000} delay={600} />
          <AnimatedCounter end="4" duration={1500} delay={900} />
        </div>
        
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          The page you're looking for seems to have taken a different path in the code.
        </p>
        
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            <i className="bx bx-home"></i>
            Go Home
          </Link>
          <Link to="/about-me" className="btn btn-secondary">
            <i className="bx bx-user"></i>
            About Me
          </Link>
        </div>
        
        <div className="error-suggestions">
          <h3>You might be looking for:</h3>
          <ul>
            <li><Link to="/">🏠 Home - My Portfolio</Link></li>
            <li><Link to="/about-me">👨‍💻 About Me - My Story</Link></li>
            <li><Link to="/project/worldwise">🌍 WorldWise Project</Link></li>
            <li><Link to="/project/far-away">🧳 Far Away Project</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;