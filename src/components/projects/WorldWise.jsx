import "../../styles/components/project-page.css";

function WorldWise() {
  const features = [
    {
      icon: "🔐",
      title: "User Authentication",
      description: "Secure login system with personalized travel lists for each user"
    },
    {
      icon: "🗺️",
      title: "Interactive Map",
      description: "Click cities on the map and add your travel notes and memories"
    },
    {
      icon: "📝",
      title: "Travel Journal",
      description: "Document your trips with dates, notes, and custom details"
    },
    {
      icon: "💾",
      title: "Local Storage",
      description: "Your travel data is saved locally and persists between sessions"
    }
  ];

  const techStack = [
    "React 18",
    "React Router",
    "Context API",
    "CSS Modules",
    "Leaflet Maps"
  ];

  return (
    <div className="project-page">
      <div className="project-gradient-orbs">
        <div className="project-orb project-orb-1"></div>
        <div className="project-orb project-orb-2"></div>
        <div className="project-orb project-orb-3"></div>
      </div>

      <div className="project-floating-icons">
        <div className="project-float-icon project-float-1"><i className='bx bx-map'></i></div>
        <div className="project-float-icon project-float-2"><i className='bx bx-world'></i></div>
        <div className="project-float-icon project-float-3"><i className='bx bx-trip'></i></div>
        <div className="project-float-icon project-float-4"><i className='bx bx-current-location'></i></div>
      </div>

      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🌍 WorldWise</h1>
            <p className="project-subtitle">
              Track your travels on an interactive map with personalized notes and memories
            </p>
            <div className="project-links">
              <a
                href="https://github.com/boyangeorgiev25/worldwise"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="bx bxl-github"></i> View Code
              </a>
              <a
                href="https://world-wise-v8jk.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="bx bx-globe"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-content">
          <div className="project-overview">
            <h2>About the Project</h2>
            <p>
              WorldWise is a travel tracking application that helps you remember and document all the places you've visited.
              Simply click on any city on the interactive map to add it to your personal travel journal.
            </p>
            <p>
              Built with React and the Context API, this project strengthened my understanding of complex state management
              patterns and user authentication flows.
            </p>
          </div>

          <div className="project-features">
            <h2>Features</h2>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-item-icon">{feature.icon}</div>
                  <div className="feature-item-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-tech">
            <h2>Technologies</h2>
            <div className="tech-tags">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-screenshots">
            <h2>Screenshots</h2>
            <div className="screenshots-grid">
              <div className="screenshot-item">
                <img src="/images/WorldWise1.png" alt="WorldWise Main Map View" />
                <div className="screenshot-caption">
                  <p>Main Map View</p>
                  <span>Track your travels interactively</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img src="/images/WorldWise2.png" alt="WorldWise Homepage" />
                <div className="screenshot-caption">
                  <p>Homepage</p>
                  <span>Clean and intuitive interface</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img src="/images/WorldWise3.png" alt="WorldWise Login" />
                <div className="screenshot-caption">
                  <p>Login Page</p>
                  <span>Secure user authentication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldWise;