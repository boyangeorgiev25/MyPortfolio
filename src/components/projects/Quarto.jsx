import "../../styles/components/project-page.css";

function Quarto() {
  const features = [
    {
      icon: "🖥️",
      title: "JavaFX Graphics",
      description: "Built with JavaFX - first time making a GUI app instead of terminal-based programs"
    },
    {
      icon: "👥",
      title: "Local Multiplayer",
      description: "Two players can compete on the same computer"
    },
    {
      icon: "🤖",
      title: "Smart AI",
      description: "AI opponent with rule-based strategy that actually thinks about its moves"
    },
    {
      icon: "🎲",
      title: "Easy AI",
      description: "Random AI for testing and beginners"
    },
    {
      icon: "⚡",
      title: "Win Detection",
      description: "Instantly detects all possible winning combinations"
    },
    {
      icon: "🔧",
      title: "Clean Code",
      description: "Well-organized class structure for easy maintenance"
    }
  ];

  const techStack = [
    "Java 17",
    "JavaFX",
    "AI Logic",
    "Rule-Based Strategy",
    "OOP Design"
  ];

  return (
    <div className="project-page">
      <div className="project-gradient-orbs">
        <div className="project-orb project-orb-1"></div>
        <div className="project-orb project-orb-2"></div>
        <div className="project-orb project-orb-3"></div>
      </div>

      <div className="project-floating-icons">
        <div className="project-float-icon project-float-1"><i className='bx bx-game'></i></div>
        <div className="project-float-icon project-float-2"><i className='bx bx-brain'></i></div>
        <div className="project-float-icon project-float-3"><i className='bx bx-joystick'></i></div>
        <div className="project-float-icon project-float-4"><i className='bx bx-trophy'></i></div>
      </div>

      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🎮 Quarto Board Game</h1>
            <p className="project-subtitle">
              Java implementation of the Quarto board game with local multiplayer and intelligent AI opponent
            </p>
            <div className="project-links">
              <a
                href="https://github.com/boyangeorgiev25/Quarto_Game"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="bx bxl-github"></i> View Code
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
              Quarto is a strategy board game where two players take turns placing pieces on a 4x4 board.
              The unique twist is that you choose which piece your opponent must play next.
            </p>
            <p>
              This was my first GUI application and taught me valuable lessons about desktop app development,
              game logic implementation, and object-oriented design patterns.
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
                <img src="/images/quarto1.png" alt="Quarto Game Main Menu" />
                <div className="screenshot-caption">
                  <p>Main Menu</p>
                  <span>Game mode selection and setup</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img src="/images/quarto2.png" alt="Quarto Game Board" />
                <div className="screenshot-caption">
                  <p>Game Board</p>
                  <span>4x4 board with piece placement</span>
                </div>
              </div>
              <div className="screenshot-item">
                <img src="/images/quarto3.png" alt="Quarto Piece Selection" />
                <div className="screenshot-caption">
                  <p>Piece Selection</p>
                  <span>Available player difficulties</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quarto;