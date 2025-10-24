import React from "react";
import "../../styles/components/project-page.css";

// Board game I built in Java - first time making something with a GUI
function Quarto() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">🎮 Quarto Board Game</h1>
            <p className="project-subtitle">
              Made this board game in Java for a school project. It's got a proper GUI and an AI that's actually pretty challenging to beat.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/boyangeorgiev25/quarto-game"
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
          <section className="project-section" id="features">
            <h2>🚀 What's in it</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🖥️</div>
                <h3>Actual graphics</h3>
                <p>
                  Built with JavaFX - first time I made something that wasn't just text in a terminal
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Play with friends</h3>
                <p>Two people can play on the same computer - old school style</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Smart AI opponent</h3>
                <p>
                  The AI actually thinks about its moves using rules I programmed. Took forever to get right but it's pretty good
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎲</div>
                <h3>Easy AI too</h3>
                <p>Also made a dumb AI that just picks randomly - good for testing and beginners</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Knows when you win</h3>
                <p>Instantly detects when someone wins - had to check all the different ways you can win</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Well organized code</h3>
                <p>
                  Tried to keep everything organized in different classes - makes it easier to add new features
                </p>
              </div>
            </div>
          </section>

          <section className="project-section" id="screenshots">
            <h2>📸 How it looks</h2>
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
          </section>

          <section className="project-section" id="learning">
            <h2>🎯 What I learned</h2>
            <div className="highlights">
              <div className="highlight-item">
                <h4>Making AI that thinks</h4>
                <p>
                  Learning to make an AI that doesn't just move randomly was hard but super satisfying when it worked
                </p>
              </div>
              <div className="highlight-item">
                <h4>Desktop app development</h4>
                <p>
                  First time using JavaFX to make something that looks decent and responds to clicks properly
                </p>
              </div>
              <div className="highlight-item">
                <h4>Game rules and logic</h4>
                <p>
                  Figuring out all the ways someone can win and keeping track of the game state was tricky
                </p>
              </div>
              <div className="highlight-item">
                <h4>Writing organized code</h4>
                <p>
                  Tried to follow best practices for organizing classes - professor was always talking about this stuff
                </p>
              </div>
            </div>
          </section>

          <section className="project-section" id="deep-dive">
            <h2>🧠 More details</h2>
            <div className="feature-details">
              <div className="feature-detail">
                <h4>How Quarto works</h4>
                <p>
                  It's like tic-tac-toe but way more complex. You've got 16 different pieces with different shapes and colors. 
                  The weird part is you pick which piece your opponent has to use!
                </p>
              </div>
              <div className="feature-detail">
                <h4>How the AI thinks</h4>
                <p>
                  I programmed it with a bunch of rules like "if you can win, do it" and "if opponent can win, block them." 
                  It checks all possibilities and picks the best move. Pretty proud of how smart it turned out.
                </p>
              </div>
              <div className="feature-detail">
                <h4>Code organization</h4>
                <p>
                  Split everything into different files - one for the game rules, one for the graphics, one for the AI. 
                  Made it much easier to fix bugs and add new features without breaking everything.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Quarto;
