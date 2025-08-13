import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  // projects I've made so far
  const projects = [
    {
      icon: "bx-world",
      title: "🌍 WorldWise - Travel Tracker",
      description:
        "Built this because I kept forgetting which cities I'd been to. You can log in, click on a map to mark places you've visited, and add your own notes. Learned a lot about React Context and managing complex state.",
      technologies: "React 18, React Router DOM, CSS Modules, Context API",
      githubLink: "https://github.com/boyangeorgiev25/worldwise",
      liveDemo: "https://world-wise-v8jk.vercel.app",
      link: "/project/worldwise",
    },
    {
      icon: "bx-package",
      title: "🧳 Far Away – Packing List",
      description:
        "Super simple packing list app I made while learning React. You can add items, check them off, sort them, and see stats. Nothing fancy but it works great and taught me the basics of state management.",
      technologies: "React, JavaScript, CSS, State Management",
      githubLink: "https://github.com/boyangeorgiev25/far-away",
      liveDemo: "https://far-away-packing-list.vercel.app",
      link: "/project/far-away",
    },
    {
      icon: "bx-game",
      title: "🎮 Quarto Game",
      description:
        "Made this board game in Java with JavaFX. It's got local multiplayer and an AI that's actually pretty challenging. First time I built something with a proper GUI - learned tons about object-oriented design.",
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
          My <span>Projects</span>
        </h2>
        <p className="section-description">
          Things I've built while learning to code
        </p>
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
                    <span className="tech-label">Built with:</span>
                    <div className="tech-tags">
                      {project.technologies
                        .split(", ")
                        .map((tech, i) => (
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
                      <span>See more</span>
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
};

export default Projects;
