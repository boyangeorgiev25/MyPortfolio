import React from 'react';
import AnimatedCounter from '../common/AnimatedCounter';
import './AboutMePage.css';

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
            <h1>About <span>Me</span></h1>
            <h2>Hey, I'm Boyan</h2>
            <p className="hero-subtitle">Just a guy who loves building stuff with code</p>
            <div className="hero-stats">
              <div className="stat-item">
                <AnimatedCounter end="2" suffix="+" duration={3000} delay={600} />
                <span className="stat-label">years figuring this out</span>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="10" suffix="+" duration={3500} delay={900} />
                <span className="stat-label">things I've made</span>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="5" suffix="+" duration={4000} delay={1200} />
                <span className="stat-label">languages I know</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/images/AboutMe1.png" alt="Boyan Georgiev" className="about-me-photo" />
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
          <section className="story-section">
            <div className="section-icon">
              <i className="bx bx-book-heart"></i>
            </div>
            <h3>How I got here</h3>
            <div className="story-content">
              <p>
                So I'm studying at KDG in Belgium (moved here from Bulgaria), trying to figure out this whole web development thing. 
                started coding because I was curious about how websites work, and now I'm kind of obsessed with building cool stuff.
              </p>
              <p>
                What I love most is when code actually solves real problems. Like, you build something and people use it and their 
                day gets a little easier. That's the good stuff right there.
              </p>
            </div>
          </section>

          <section className="philosophy-section">
            <div className="section-icon">
              <i className="bx bx-bulb"></i>
            </div>
            <h3>How I think about code</h3>
            <div className="philosophy-card">
              <blockquote>
                "Code should work, be easy to understand, and not make the next person (including future me) want to cry. 
                Also, if it doesn't solve a real problem, why are we building it?"
              </blockquote>
              <p>
                I try to write code that makes sense, runs fast enough, and doesn't break when someone uses it differently 
                than I expected (which happens more often than I'd like to admit).
              </p>
            </div>
          </section>
        </div>

        <section className="skills-section">
          <h3>Stuff I know how to use</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Making things look good</h4>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>CSS Frameworks</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>The behind-the-scenes stuff</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Other useful things</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>WordPress</li>
                <li>Vite & Build Tools</li>
                <li>VS Code</li>
                <li>Command Line</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>What I'm figuring out next</h4>
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
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h4>React Native Internship at Jointly</h4>
                <p>Successfully completed first year at KDG and secured an internship position at Jointly, focusing on React Native mobile application development. Applying academic knowledge to real-world projects and gaining industry experience.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024 - 2027</div>
              <div className="timeline-content">
                <h4>Karel de Grote University College (KDG) - Applied Computer Science</h4>
                <p>Pursuing Applied Computer Science degree, building on C# foundation with Java, algorithms, and system architecture. Successfully completed first year and exploring modern web technologies, leading to internship opportunities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>SoftUni C# Programming Course</h4>
                <p>Completed comprehensive C# programming course covering fundamentals, Object-Oriented Programming (OOP), database management with MySQL, and Entity Framework. This foundation prepared me for university-level computer science studies.</p>
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
              <p>I love capturing moments and finding interesting angles in everyday scenes. There's something satisfying about framing the perfect shot and seeing the world through a different lens.</p>
            </div>
            <div className="interest-item">
              <i className="bx bx-video"></i>
              <h4>Video Creation</h4>
              <p>I enjoy editing videos and experimenting with different effects to tell stories. It's fascinating how you can piece together footage to create something completely new and engaging.</p>
            </div>
            <div className="interest-item">
              <i className="bx bx-book"></i>
              <h4>Tech Exploration</h4>
              <p>I'm constantly watching tutorials, reading about new frameworks, and diving into tech rabbit holes. The field moves so fast, and there's always something exciting to discover.</p>
            </div>
            <div className="interest-item">
              <i className="bx bx-group"></i>
              <h4>Developer Community</h4>
              <p>I genuinely enjoy connecting with other developers and discussing the latest tech trends. It's great to share knowledge and learn from people who are just as passionate about code.</p>
            </div>
          </div>
        </section>


        <section className="contact-cta">
          <h3>Let's connect</h3>
          <p>Feel free to reach out for collaborations or tech discussions.</p>
          <div className="social-links">
            <a href="https://github.com/boyangeorgiev25" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/boyan-georgiev-08853329b/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/boqn_g/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt'></i></a>
            <a href="mailto:boqng25@gmail.com"><i className='bx bx-envelope'></i></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMePage;