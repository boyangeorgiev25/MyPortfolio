import React from "react";
import "./ProjectDetail.css";

const ECommercePlatform = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>E-Commerce Platform</h1>
        <div className="project-meta">
          <span className="tech-stack">React • Node.js • MongoDB • Stripe</span>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images">
          <div className="main-image">
            <img src="/images/1.png" alt="E-Commerce Platform" />
          </div>
          <div className="additional-images">
            <img src="/images/1.png" alt="E-Commerce Platform - Dashboard" />
            <img src="/images/1.png" alt="E-Commerce Platform - Mobile View" />
          </div>
        </div>

        <div className="project-description">
          <h2>Project Overview</h2>
          <p>
            A full-featured e-commerce platform built with modern web
            technologies. This application provides a complete online shopping
            experience with secure payment processing, user authentication, and
            real-time inventory management.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>User registration and authentication system</li>
            <li>Product catalog with search and filtering</li>
            <li>Shopping cart with persistent sessions</li>
            <li>Secure payment processing with Stripe integration</li>
            <li>Admin dashboard for inventory management</li>
            <li>Real-time notifications</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>

          <h3>Technical Challenges</h3>
          <p>
            The main challenges included implementing secure payment processing,
            optimizing database queries for large product catalogs, and ensuring
            real-time inventory updates across multiple user sessions.
          </p>

          <h3>Technologies Used</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <strong>Frontend:</strong> React, Redux, CSS Modules
            </div>
            <div className="tech-item">
              <strong>Backend:</strong> Node.js, Express.js, JWT Authentication
            </div>
            <div className="tech-item">
              <strong>Database:</strong> MongoDB, Mongoose
            </div>
            <div className="tech-item">
              <strong>Payment:</strong> Stripe API
            </div>
            <div className="tech-item">
              <strong>Deployment:</strong> AWS EC2, S3, CloudFront
            </div>
          </div>

          <div className="project-links">
            <a href="#" className="btn">
              Live Demo
            </a>
            <a href="#" className="btn btn-outline">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommercePlatform;
