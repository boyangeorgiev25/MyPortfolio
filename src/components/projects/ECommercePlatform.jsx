import React, { useState } from "react";
import "./ProjectDetail.css";

const ECommercePlatform = () => {
  const images = [
    { src: "/images/1.png", alt: "E-Commerce Platform - Main View" },
    { src: "/images/1.png", alt: "E-Commerce Platform - Dashboard" },
    { src: "/images/1.png", alt: "E-Commerce Platform - Mobile View" },
    { src: "/images/1.png", alt: "E-Commerce Platform - Checkout" }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

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
          {/* Mobile Image Gallery */}
          <div className="mobile-image-gallery">
            <div className="gallery-container">
              <div 
                className="gallery-track" 
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="gallery-image">
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="gallery-nav">
              <button 
                className="gallery-btn" 
                onClick={prevImage}
                disabled={currentImage === 0}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              
              <div className="gallery-indicators">
                <span className="gallery-info">{currentImage + 1} / {images.length}</span>
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`gallery-dot ${index === currentImage ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </div>
              </div>
              
              <button 
                className="gallery-btn" 
                onClick={nextImage}
                disabled={currentImage === images.length - 1}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Desktop Images (hidden on mobile) */}
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
