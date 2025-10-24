import '../../styles/components/project-page.css';

function FarAway() {
  const features = [
    {
      icon: "➕",
      title: "Add Items",
      description: "Quickly add items with quantities to your packing list"
    },
    {
      icon: "✅",
      title: "Check Off",
      description: "Mark items as packed with a simple checkbox"
    },
    {
      icon: "🔄",
      title: "Sort & Filter",
      description: "Organize by input order, name, or packed status"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "See real-time statistics of your packing progress"
    },
    {
      icon: "🗑️",
      title: "Delete Items",
      description: "Remove individual items or clear the entire list"
    }
  ];

  const techStack = [
    "React",
    "JavaScript",
    "CSS",
    "State Management"
  ];

  return (
    <div className="project-page">
      <div className="project-gradient-orbs">
        <div className="project-orb project-orb-1"></div>
        <div className="project-orb project-orb-2"></div>
        <div className="project-orb project-orb-3"></div>
      </div>

      <div className="project-floating-icons">
        <div className="project-float-icon project-float-1"><i className='bx bx-package'></i></div>
        <div className="project-float-icon project-float-2"><i className='bx bx-list-check'></i></div>
        <div className="project-float-icon project-float-3"><i className='bx bx-trip'></i></div>
        <div className="project-float-icon project-float-4"><i className='bx bx-checkbox-checked'></i></div>
      </div>

      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🧳 Far Away</h1>
            <p className="project-subtitle">
              Simple packing list app to organize your travel items and track packing progress
            </p>
            <div className="project-links">
              <a
                href="https://github.com/boyangeorgiev25/Travel-list"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="bx bxl-github"></i> View Code
              </a>
              <a
                href="https://far-away-packing-list.vercel.app"
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
              Far Away is a practical packing list application that helps you organize your travel items.
              Add items, check them off as you pack, and watch your progress in real-time.
            </p>
            <p>
              This was one of my first React projects, helping me learn fundamental concepts like state management,
              component composition, and array manipulation methods.
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
                <img src="/images/travel.png" alt="Far Away Packing List Interface" />
                <div className="screenshot-caption">
                  <p>Packing List Interface</p>
                  <span>Add, sort, and manage your travel items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarAway;