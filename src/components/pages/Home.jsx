import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '../common/AnimatedCounter';
import TextType from '../common/TextType';
import ShinyText from '../common/ShinyText';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [typingComplete, setTypingComplete] = useState({});
  const inputRef = useRef(null);

  const commands = {
    help: `about       overview of who i am
journey     timeline of milestones
skills      detailed technical stack
experience  recent work and collaborations
projects    highlighted builds
blogs       recent writing`,

    about: `boyan georgiev - full-stack developer and student

location    belgium (open to remote and hybrid work)
education   applied computer science @ kdg university college
profile     i enjoy turning ideas into performant products and exploring immersive ui and ux
looking for internships or collaborations where i can refine front-end craft and connect it with solid back-end engineering`,

    journey: `2021  started building python tooling and automation scripts
2022  dove into web development with vanilla js, then moved to react and node
2023  shipped class projects and hackathon prototypes; added java and c# desktop apps
2024  portfolio revamp with three.js and webgl, freelance landing pages, ongoing bsc studies`,

    skills: `languages and runtimes
  javascript / typescript (es2023)
  python
  c# (.net)
  java
  html5 / css3 / scss

front-end
  react with hooks, vite, beginnings of redux toolkit
  three.js and react-three-fiber for 3d visuals
  responsive design systems, tailwind, shadcn/ui

back-end and tooling
  node.js (express, fastify), rest api design
  mysql, mongodb, prisma
  docker, github actions, vercel, netlify
  unit testing with vitest and jest

extras
  figma and adobe xd collaboration
  agile teamwork, jira, notion documentation`,

    experience: `freelance front-end developer (2023 - present)
  designed and launched marketing sites and dashboards for student-led ventures
  shipped a/b tested landing pages that improved sign-up conversions about 25 percent

university projects @ kdg
  led a four person team building a campus event platform with react and express
  created a java desktop inventory manager with a focus on clean architecture and testing

open-source and community
  contributed ui tweaks and documentation to student clubs and local hackathons
  mentored peers on git workflows and deployment best practices`,

    projects: `react portfolio 2.0
  immersive personal site using react, three.js lanyard animation, vite

quarto scorekeeper
  desktop game assistant built with javafx to track gameplay logic and scoring

habit pulse
  habit tracking web app with react, express, mongodb, and realtime charts

codex playground
  experimental cli-inspired interface to teach git and terminal commands`,

    blogs: `2024-03  shipped a deep-dive on react performance tuning and code-splitting
2024-01  wrote about balancing university projects with freelance work
2023-11  reflected on lessons from building the quarto scorekeeper desktop app

full archive coming soon on my upcoming blog section`,

    'cd blogs': `navigating to blog page...
launching /blog route`,

    philosophy: `engineering philosophy

ship thoughtfully    focus on features that solve real user pains
tell the story       clean ui, helpful copy, accessible flows
never stop learning  every project is a chance to add a new tool to the stack
share knowledge      docs, demos, and code reviews make the whole team stronger`,

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

    const response = commands[trimmedInput] || `command not found: ${trimmedInput}\ntype 'help' for available commands`;

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
      </section>
    </>
  );
}

export default Home;
