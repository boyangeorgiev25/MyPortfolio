import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  // projects I've made so far
  const projects = [
    {
      icon: "bx-world",
      title: "🌍 WorldWise - Travel Tracker",
      description:
        "A comprehensive travel tracking application that allows users to log visited cities on an interactive map with personalized notes. Developed to strengthen skills in React Context API and complex state management patterns.",
      technologies: "React 18, React Router DOM, CSS Modules, Context API",
      githubLink: "https://github.com/boyangeorgiev25/worldwise",
      liveDemo: "https://world-wise-v8jk.vercel.app",
      link: "/project/worldwise",
    },
    {
      icon: "bx-package",
      title: "🧳 Far Away – Packing List",
      description:
        "A practical packing list application featuring item management, completion tracking, sorting capabilities, and usage statistics. Built as a learning project to master React fundamentals and state management principles.",
      technologies: "React, JavaScript, CSS, State Management",
      githubLink: "https://github.com/boyangeorgiev25/Travel-list",
      liveDemo: null,
      link: "/project/far-away",
    },
    {
      icon: "bx-game",
      title: "🎮 Quarto Game",
      description:
        "A Java-based implementation of the Quarto board game featuring local multiplayer functionality and an intelligent AI opponent. First experience developing a complete GUI application, providing valuable insights into object-oriented design patterns.",
      technologies: "Java 17, JavaFX, AI Logic, Rule-Based Strategy",
      githubLink: "https://github.com/boyangeorgiev25/quarto-game",
      liveDemo: null,
      link: "/project/quarto",
    },
  ];

  return (
    <section className="services projects-section" id="projects">
      <div className="section-header">
        <h2 className="heading">
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-gallery">
        <div className="gallery-container">
          <div className="gallery-track">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="card-header">
                  <div className="project-icon">
                    <i className={`bx ${project.icon}`}></i>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags">
                      {project.technologies.split(", ").map((tech, i) => (
                        <span key={i} className="tech-tag">
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
        </div>

        <div className="gallery-indicators">
          {projects.map((_, index) => (
            <div key={index} className="gallery-dot"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
