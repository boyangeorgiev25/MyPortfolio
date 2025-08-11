import React from 'react';
import AnimatedCounter from './AnimatedCounter.jsx';
import './AboutMePage.css';

const AboutMePage = () => {
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
            <h2>Hi, I'm Boyan Georgiev</h2>
            <p className="hero-subtitle">Web Developer & Student at Karel de Grote University College</p>
            <div className="hero-stats">
              <div className="stat-item">
                <AnimatedCounter end="2" suffix="+" duration={3000} delay={600} />
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="10" suffix="+" duration={3500} delay={900} />
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="5" suffix="+" duration={4000} delay={1200} />
                <span className="stat-label">Technologies</span>
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
            <h3>My Story</h3>
            <div className="story-content">
              <p>
                Welcome to my digital space! I'm a passionate web developer currently studying at Karel de Grote University College (KDG), 
                where I'm immersing myself in the world of modern web development. My journey into programming started with curiosity 
                and has evolved into a deep passion for creating meaningful digital experiences.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and make life better for people. Whether it's 
                building responsive websites, developing interactive applications, or exploring new frameworks, I'm always excited 
                to take on new challenges and learn something new.
              </p>
            </div>
          </section>

          <section className="philosophy-section">
            <div className="section-icon">
              <i className="bx bx-bulb"></i>
            </div>
            <h3>My Development Philosophy</h3>
            <div className="philosophy-card">
              <blockquote>
                "I believe in writing clean, maintainable code that not only works but is also enjoyable to work with. 
                Every project is an opportunity to learn something new and create something meaningful that makes a 
                positive impact on users' lives."
              </blockquote>
              <p>
                My approach to development focuses on user-centered design, performance optimization, and continuous 
                improvement. I strive to build applications that are not only functional but also accessible, 
                secure, and scalable.
              </p>
            </div>
          </section>
        </div>

        <section className="skills-section">
          <h3>Technical Skills</h3>
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
              <h4>Backend & Databases</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Technologies</h4>
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
          <h3>Education & Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h4>Karel de Grote University College (KDG)</h4>
                <p>Studying Web Development with focus on modern frameworks and best practices. 
                Learning full-stack development, user experience design, and project management.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>Self-Taught Web Development</h4>
                <p>Started my programming journey through online courses, tutorials, and personal projects. 
                Built foundation in HTML, CSS, JavaScript, and basic web development concepts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="interests-section">
          <h3>Beyond Coding</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <i className="bx bx-camera"></i>
              <h4>Photography</h4>
              <p>I enjoy capturing moments and exploring visual storytelling through photography.</p>
            </div>
            <div className="interest-item">
              <i className="bx bx-video"></i>
              <h4>Videography</h4>
              <p>Creating engaging video content and exploring the intersection of technology and media.</p>
            </div>
            <div className="interest-item">
              <i className="bx bx-book"></i>
              <h4>Continuous Learning</h4>
              <p>Always reading tech blogs, taking courses, and staying updated with industry trends.</p>
            </div>
            <div className="interest-item">
              <i className="bx bx-group"></i>
              <h4>Community</h4>
              <p>Participating in developer communities and sharing knowledge with fellow learners.</p>
            </div>
          </div>
        </section>


        <section className="contact-cta">
          <h3>Let's Connect!</h3>
          <p>
            I'm always excited to discuss new projects, share ideas, or just chat about the latest in web development. 
            Feel free to reach out if you'd like to collaborate or if you have any questions!
          </p>
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