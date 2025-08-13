import React from 'react';
import './ProjectPage.css';

const Quarto = () => {
  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🎮 Quarto Game (Java)</h1>
            <p className="project-subtitle">
              A Java-based implementation of Quarto, the abstract strategy board game with AI opponents using Rule-Based logic.
            </p>
            <div className="project-links">
              <a href="https://github.com/boyangeorgiev25/quarto-game" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="bx bxl-github"></i> View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-content">
          <section className="project-section" id="features">
            <h2>🚀 Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🖥️</div>
                <h3>JavaFX GUI</h3>
                <p>Modern graphical interface built with JavaFX for smooth gameplay experience</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Local Multiplayer</h3>
                <p>Support for human vs human gameplay on the same machine</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Rule-Based AI</h3>
                <p>Intelligent AI using facts and logical inference for strategic decisions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎲</div>
                <h3>Random AI</h3>
                <p>Unpredictable AI opponent for casual gameplay and testing</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Real-time Detection</h3>
                <p>Instant win condition detection and game state validation</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Modular Design</h3>
                <p>Clean code structure with separation of concerns for easy expansion</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="screenshots">
            <h2>📸 Game Preview</h2>
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
                  <span>Available pieces with attributes</span>
                </div>
              </div>
            </div>
          </section>

          <section className="project-section" id="learning">
            <h2>🎯 Development Focus</h2>
            <div className="highlights">
              <div className="highlight-item">
                <h4>AI Implementation</h4>
                <p>Developed rule-based inference engine with logical decision making for strategic gameplay</p>
              </div>
              <div className="highlight-item">
                <h4>JavaFX Mastery</h4>
                <p>Built modern desktop application with responsive UI components and smooth interactions</p>
              </div>
              <div className="highlight-item">
                <h4>Game Logic</h4>
                <p>Implemented complex win condition detection and state management for board game mechanics</p>
              </div>
              <div className="highlight-item">
                <h4>Clean Architecture</h4>
                <p>Designed modular system following SOLID principles with clear separation of concerns</p>
              </div>
            </div>
          </section>

          <section className="project-section" id="deep-dive">
            <h2>🧠 Technical Deep Dive</h2>
            <div className="feature-details">
              <div className="feature-detail">
                <h4>About Quarto</h4>
                <p>Quarto is a 2-player strategy game played on a 4×4 board with 16 unique pieces. Each piece has 4 attributes: tall/short, light/dark, round/square, solid/hollow. Players choose pieces for opponents to place, aiming to complete lines with shared attributes.</p>
              </div>
              <div className="feature-detail">
                <h4>Rule-Based AI Strategy</h4>
                <p>The AI implements a lightweight inference engine that defines facts about game state and applies logical rules to make strategic decisions. It prioritizes winning moves and blocking opponent victories through structured reasoning.</p>
              </div>
              <div className="feature-detail">
                <h4>Modular Architecture</h4>
                <p>Project structure separates core game logic, UI components, AI strategies, and utility classes. This design enables easy testing, debugging, and future feature expansion while maintaining clean code organization.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Quarto;