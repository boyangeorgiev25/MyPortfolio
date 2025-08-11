import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      icon: "bx-world",
      title: "🌍 WorldWise - Personal Travel Tracker",
      description:
        "A modern React application that helps travelers keep track of cities they've visited around the world. Features user authentication, personal data management, and an interactive map interface with travel planning capabilities.",
      technologies: "React 18, React Router DOM, CSS Modules, Context API",
      githubLink: "https://github.com/boyangeorgiev25/worldwise",
      liveDemo: "https://world-wise-v8jk.vercel.app",
      link: "/project/worldwise",
    },
    {
      icon: "bx-package",
      title: "🧳 Far Away – Packing List App",
      description:
        "A simple, interactive packing list built with React. Add, sort, check off, and remove items as you prepare for your next trip. Perfect for practicing state management, component structure, and props with live statistics.",
      technologies: "React, JavaScript, CSS, State Management",
      githubLink: "https://github.com/boyangeorgiev25/far-away",
      liveDemo: "https://far-away-packing-list.vercel.app",
      link: "/project/far-away",
    },
  ];

  return (
    <section className="services projects-section" id="projects">
      <div className="section-header">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <p className="section-description">
          Explore my latest work and creative solutions
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-header">
              <div className="project-icon">
                <i className={`bx ${project.icon}`}></i>
              </div>
              <div className="project-number">0{index + 1}</div>
            </div>

            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                  {project.technologies.split(", ").map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="project-buttons">
                <Link to={project.link} className="project-btn primary-btn">
                  <span>View Details</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>
                <div className="secondary-buttons">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <span>GitHub</span>
                    <i className="bx bxl-github"></i>
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-demo-btn"
                    >
                      <span>Live Demo</span>
                      <i className="bx bx-globe"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="card-glow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
