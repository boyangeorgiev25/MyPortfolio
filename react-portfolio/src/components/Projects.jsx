import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      icon: 'bx-code-alt',
      title: 'E-Commerce Platform',
      description: 'Full-stack React application with Node.js backend, featuring user authentication, payment integration, and real-time inventory management. Built with modern technologies and deployed on AWS.',
      technologies: 'React, Node.js, MongoDB, Stripe',
      link: '/project/ecommerce-platform'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Task Management App',
      description: 'Cross-platform mobile application developed with React Native. Features include drag-and-drop kanban boards, team collaboration, and offline synchronization capabilities.',
      technologies: 'React Native, Firebase, Redux',
      link: '/project/task-management-app'
    },
    {
      icon: 'bx-data',
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics dashboard that processes large datasets and presents insights through dynamic charts and graphs. Integrated with multiple data sources and real-time updates.',
      technologies: 'Python, Django, D3.js, PostgreSQL',
      link: '/project/data-visualization-dashboard'
    }
  ];

  return (
    <section className="services projects-section" id="projects">
      <div className="section-header">
        <h2 className="heading">My <span>Projects</span></h2>
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
                  {project.technologies.split(', ').map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="card-footer">
              <Link to={project.link} className="project-btn">
                <span>View Project</span>
                <i className="bx bx-right-arrow-alt"></i>
              </Link>
              <div className="card-glow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;