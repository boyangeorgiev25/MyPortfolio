import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '../common/AnimatedCounter';
import TextType from '../common/TextType';
import ShinyText from '../common/ShinyText';
import '../../styles/components/home.css';

function Home() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [typingComplete, setTypingComplete] = useState({});
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth <= 768;
  });
  const inputRef = useRef(null);

  const commands = {
    help: `available commands:
─────────────────────────────────────────────────────
  about       who i am and what i do
  skills      technologies i work with
  experience  work and projects
  projects    featured builds
  clear       clear terminal
─────────────────────────────────────────────────────`,

    about: `─────────────────────────────────────────────────────
NAME:     Boyan Georgiev
ROLE:     Full-Stack Developer & CS Student
LOCATION: Belgium
SCHOOL:   KdG University College
          Applied Computer Science
─────────────────────────────────────────────────────
I specialize in building modern web apps
with React, Node.js, and Three.js.

Currently working on freelance projects
and exploring creative web technologies.

Passionate about creating performant,
user-friendly applications with clean
code and immersive experiences.`,

    skills: `─────────────────────────────────────────────────────
languages/
  javascript typescript python java c#
  html5 css3 scss

frontend/
  react (hooks, context, router)
  three.js react-three-fiber
  responsive-design tailwind
  vite modern-build-tools

backend/
  node.js express rest-apis
  mysql mongodb prisma
  authentication authorization

devops/
  git github docker
  vercel netlify
  vitest jest

design/
  figma adobe-xd
  agile jira
  technical-documentation
─────────────────────────────────────────────────────`,

    experience: `─────────────────────────────────────────────────────
[jointly] august 2024 - present
  > data analytics and monitoring
  > python admin dashboard
  > real-time visualization
  > product development collaboration

[freelance] 2023 - present
  > responsive websites for businesses
  > landing pages (+25% conversions)
  > interactive dashboards
  > client collaboration

[kdg university]
  > led 4-person team (event platform)
  > java desktop application
  > rest apis & database integration
  > agile development & code reviews

[community]
  > open-source contributions
  > git workflow mentoring
  > hackathons and coding events
─────────────────────────────────────────────────────`,

    projects: `─────────────────────────────────────────────────────
worldwise/
  travel logging app with interactive maps
  react 18, context api, leaflet
  [live demo available]

far-away/
  smart packing list with sorting
  react, state management, local storage
  [practical travel tool]

quarto-game/
  desktop game with ai opponent
  java, javafx, game logic
  [first major java project]

jointly-dashboard/
  python analytics dashboard
  real-time monitoring & visualization
  [production monitoring tool]

portfolio-v2/
  this website! 3d animations
  react, three.js, vite
  [you are here]
─────────────────────────────────────────────────────
run 'cd /projects' to view details`,

    philosophy: `─────────────────────────────────────────────────────
## user-first design
every feature should solve a real problem
if it doesn't help the user, it doesn't
belong in the product

## code is craft
write clean, readable code that others
(and future you) can understand
good code tells a story

## ship and iterate
perfect is the enemy of done
launch, learn, and improve
real feedback beats endless planning

## never stop learning
technology evolves constantly
stay curious, experiment with new tools
don't be afraid to rebuild

## knowledge sharing
document your work, help others learn
contribute to the community
we all grow faster together
─────────────────────────────────────────────────────`,

    clear: "CLEAR"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();

    if (!trimmedInput) return;

    if (trimmedInput === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response = commands[trimmedInput] || commands[trimmedInput.charAt(0)] || `command not found: ${trimmedInput}\ntype 'help' for available commands`;

    const newId = Date.now();
    setHistory([...history, { command: input, response, id: newId }]);
    setTypingComplete({ ...typingComplete, [newId]: false });
    setInput("");

    if (trimmedInput === "cd blogs") {
      navigate("/blog");
      return;
    }
  };

  const handleTypingComplete = (id) => {
    setTypingComplete({ ...typingComplete, [id]: true });
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
      });

      sr.reveal('.home-content, .heading', { origin: 'top' });
      sr.reveal(
        '.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form',
        { origin: 'bottom' }
      );
      sr.reveal('.home-content h1, .about-img img', { origin: 'left' });
      sr.reveal('.home-content h3, .home-content p, .about-content', {
        origin: 'right',
      });
    });
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="home-background">
          <div className="background-shapes">
            <div className="bg-shape bg-shape-1"></div>
            <div className="bg-shape bg-shape-2"></div>
            <div className="bg-shape bg-shape-3"></div>
          </div>
        </div>
        <div className="home-content">
          <div className="content-text">
            <div className="greeting">
              <span className="greeting-text">Hey there, I'm</span>
              <div className="greeting-decoration"></div>
            </div>
            <h1>
              <span className="name-part">Boyan</span>
              <span className="name-part">Georgiev</span>
            </h1>
            <div className="role-container">
              <h3 className="role-text">
                <TextType
                  text={["a Software Developer", "a Web Designer", "a Problem Solver"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h3>
              <div className="role-underline"></div>
            </div>

            <div className="home-stats">
              <div className="stat-box">
                <AnimatedCounter
                  end="2"
                  suffix="+"
                  duration={2000}
                  delay={800}
                />
                <span className="stat-label">years coding</span>
              </div>
              <div className="stat-box">
                <AnimatedCounter
                  end="15"
                  suffix="+"
                  duration={2500}
                  delay={1200}
                />
                <span className="stat-label">projects built</span>
              </div>
              <div className="stat-box">
                <AnimatedCounter
                  end="100"
                  suffix="%"
                  duration={3000}
                  delay={1600}
                />
                <span className="stat-label">client satisfaction</span>
              </div>
            </div>

            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/boyan-georgiev-08853329b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/boyangeorgiev25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.instagram.com/boqn_g/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
            </div>

            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <ShinyText text="Let's chat!" speed={3} />
              </a>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="terminal-preview-section">
            <h3 className="terminal-intro-text">Want to know more about me? <span>Ask here!</span></h3>
            <div className="terminal-preview-card" onClick={handleTerminalClick}>
              <div className="terminal-preview-header">
                <div className="preview-buttons">
                  <span className="preview-button close"></span>
                  <span className="preview-button minimize"></span>
                  <span className="preview-button maximize"></span>
                </div>
                <div className="preview-title">boyan@portfolio:~</div>
              </div>
              <div className="terminal-preview-body">
                <div className="terminal-line">
                  <span className="terminal-output">Last login: {new Date().toDateString()} {new Date().toLocaleTimeString()} on ttys000</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-output terminal-hint">Type 'help' to see available commands</span>
                </div>
                <div className="terminal-line terminal-spacer"></div>

                {history.map((item, index) => (
                  <div key={item.id || index}>
                    <div className="terminal-line">
                      <span className="terminal-prompt">boyan@portfolio ~ %</span>
                      <span className="terminal-command">{item.command}</span>
                    </div>
                    {item.response && (
                      <div className="terminal-line">
                        <span className="terminal-output">
                          <TextType
                            text={[item.response]}
                            typingSpeed={15}
                            showCursor={false}
                            pauseDuration={999999}
                            onComplete={() => handleTypingComplete(item.id)}
                          />
                        </span>
                      </div>
                    )}
                  </div>
                ))}

                {(history.length === 0 || typingComplete[history[history.length - 1]?.id]) && (
                  <form onSubmit={handleSubmit} className="terminal-input-line">
                    <span className="terminal-prompt">boyan@portfolio ~ %</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="terminal-input"
                      autoFocus
                      spellCheck="false"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
