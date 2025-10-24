import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSwap, { Card } from '../common/CardSwap';

function Projects() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const swapRef = useRef(null);

  const projects = [
    {
      icon: 'bx-world',
      title: 'WorldWise - Travel Tracker',
      description:
        'A comprehensive travel tracking application that allows users to log visited cities on an interactive map with personalized notes. Developed to strengthen skills in React Context API and complex state management patterns.',
      technologies: 'React 18, React Router DOM, CSS Modules, Context API',
      githubLink: 'https://github.com/boyangeorgiev25/worldwise',
      liveDemo: 'https://world-wise-v8jk.vercel.app',
      link: '/project/worldwise',
      image: '/images/WorldWise1.png'
    },
    {
      icon: 'bx-package',
      title: 'Far Away – Packing List',
      description:
        'A practical packing list application featuring item management, completion tracking, sorting capabilities, and usage statistics. Built as a learning project to master React fundamentals and state management principles.',
      technologies: 'React, JavaScript, CSS, State Management',
      githubLink: 'https://github.com/boyangeorgiev25/Travel-list',
      liveDemo: null,
      link: '/project/far-away',
      image: '/images/travel.png'
    },
    {
      icon: 'bx-game',
      title: 'Quarto Game',
      description:
        'A Java-based implementation of the Quarto board game featuring local multiplayer functionality and an intelligent AI opponent. First experience developing a complete GUI application, providing valuable insights into object-oriented design patterns.',
      technologies: 'Java 17, JavaFX, AI Logic, Rule-Based Strategy',
      githubLink: 'https://github.com/boyangeorgiev25/quarto-game',
      liveDemo: null,
      link: '/project/quarto',
      image: '/images/quarto1.png'
    },
  ];

  const handleNext = () => {
    if (swapRef.current) {
      swapRef.current();
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('projects-visible');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="services projects-section" id="projects">
      <div className="section-header projects-section-header">
        <h2>Featured <span>Projects</span></h2>
      </div>

      <div className="projects-layout">
        <div className="projects-text-content">
          <div className="projects-background-text">
            <span className="text-featured">Featured</span>
            <span className="text-projects">Projects</span>
          </div>
        </div>

        <div className="projects-cardswap-wrapper">
          <button className="project-nav-btn" onClick={handleNext}>
            <i className='bx bx-refresh'></i>
          </button>

          <CardSwap
            width={600}
            height={450}
            cardDistance={80}
            verticalDistance={90}
            delay={4000}
            pauseOnHover={true}
            skewAmount={5}
            easing="elastic"
            manualOnly={true}
            onSwapRef={swapRef}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                customClass="project-swap-card"
                onClick={() => navigate(project.link)}
              >
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>

                  <p className="project-card-description">{project.description}</p>

                  <div className="project-card-tech">
                    {project.technologies.split(', ').slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default Projects;
