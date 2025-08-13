import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../common/AnimatedCounter';
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
        
      </div>
    </div>
  );
};

export default PageNotFound;