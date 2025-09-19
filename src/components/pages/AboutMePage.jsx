import React from "react";
import AnimatedCounter from "../common/AnimatedCounter";
import "./AboutMePage.css";

function AboutMePage() {
  return (
    <div className="about-me-page">
      <div className="about-me-hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              About <span>Me</span>
            </h1>
            <h2>Boyan Georgiev</h2>
            <p className="hero-subtitle">
              Full-Stack Developer & Computer Science Student
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <AnimatedCounter
                  end="2"
                  suffix="+"
                  duration={3000}
                  delay={600}
                />
                <span className="stat-label">years of experience</span>
              </div>
              <div className="stat-item">
                <AnimatedCounter
                  end="15"
                  suffix="+"
                  duration={3500}
                  delay={900}
                />
                <span className="stat-label">projects completed</span>
              </div>
              <div className="stat-item">
                <AnimatedCounter
                  end="5"
                  suffix="+"
                  duration={4000}
                  delay={1200}
                />
                <span className="stat-label">technologies mastered</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src="/images/AboutMe1.png"
                alt="Boyan Georgiev"
                className="about-me-photo"
              />
              <div className="image-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-content">
        <div className="content-grid">
          <div className="story-section">
            <div className="section-icon">
              <i className="bx bx-book-heart"></i>
            </div>
            <h3>How I got here</h3>
            <div className="story-content">
              <p>
                I'm currently studying Applied Computer Science at KDG University College in Belgium, 
                having relocated from Bulgaria to pursue my passion for technology. My journey into 
                web development began with curiosity about how websites function, which quickly evolved 
                into a genuine enthusiasm for creating meaningful digital solutions.
              </p>
              <p>
                What drives me most is developing applications that address real-world challenges. 
                There's immense satisfaction in building something that genuinely improves users' 
                experiences and makes their daily tasks more efficient.
              </p>
            </div>
          </div>

          <div className="philosophy-section">
            <div className="section-icon">
              <i className="bx bx-bulb"></i>
            </div>
            <h3>How I think about code</h3>
            <div className="philosophy-card">
              <blockquote>
                "Quality code should be functional, maintainable, and purposeful. 
                Every line should serve a clear need and be understandable to future 
                developers, including my future self."
              </blockquote>
              <p>
                I focus on writing clean, efficient code that performs well and handles 
                various use cases gracefully. My approach emphasizes readability and 
                robust functionality while continuously learning from each project.
              </p>
            </div>
          </div>
        </div>

        <section className="skills-section">
          <h3>Technical Skills & Expertise</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>CSS Frameworks</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend Development</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Development Tools & Platforms</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>WordPress</li>
                <li>Vite & Build Tools</li>
                <li>VS Code</li>
                <li>Command Line</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Currently Learning</h4>
              <ul>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>Docker</li>
                <li>Cloud Platforms</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h3>My journey so far</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>SoftUni C# Programming Course</h4>
                <p>
                  Completed comprehensive C# programming course covering
                  fundamentals, Object-Oriented Programming (OOP), database
                  management with MySQL, and Entity Framework. This foundation
                  prepared me for university-level computer science studies.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024 - 2027</div>
              <div className="timeline-content">
                <h4>
                  Karel de Grote University College (KDG) - Applied Computer
                  Science
                </h4>
                <p>
                  Pursuing Applied Computer Science degree, building on C#
                  foundation with Java, algorithms, and system architecture.
                  Successfully completed first year and exploring modern web
                  technologies, leading to internship opportunities.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h4>React Native Internship at Jointly</h4>
                <p>
                  Successfully completed first year at KDG and secured an
                  internship position at Jointly, focusing on React Native
                  mobile application development. Applying academic knowledge to
                  real-world projects and gaining industry experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="interests-section">
          <h3>When I'm not coding</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <i className="bx bx-camera"></i>
              <h4>Photography</h4>
              <p>
                I love capturing moments and finding interesting angles in
                everyday scenes. There's something satisfying about framing the
                perfect shot and seeing the world through a different lens.
              </p>
            </div>
            <div className="interest-item">
              <i className="bx bx-video"></i>
              <h4>Video Creation</h4>
              <p>
                I enjoy editing videos and experimenting with different effects
                to tell stories. It's fascinating how you can piece together
                footage to create something completely new and engaging.
              </p>
            </div>
            <div className="interest-item">
              <i className="bx bx-book"></i>
              <h4>Tech Exploration</h4>
              <p>
                I'm constantly watching tutorials, reading about new frameworks,
                and diving into tech rabbit holes. The field moves so fast, and
                there's always something exciting to discover.
              </p>
            </div>
            <div className="interest-item">
              <i className="bx bx-group"></i>
              <h4>Developer Community</h4>
              <p>
                I genuinely enjoy connecting with other developers and
                discussing the latest tech trends. It's great to share knowledge
                and learn from people who are just as passionate about code.
              </p>
            </div>
          </div>
        </section>

        <div className="contact-cta">
          <h3>Let's connect</h3>
          <div className="social-links">
            <a
              href="https://github.com/boyangeorgiev25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/boyan-georgiev-08853329b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/boqn_g/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="mailto:boqng25@gmail.com">
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMePage;
