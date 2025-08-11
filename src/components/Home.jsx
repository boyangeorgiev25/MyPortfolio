import React, { useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter.jsx';

const Home = () => {
  useEffect(() => {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
      });

      sr.reveal('.home-content, .heading', { origin: 'top' });
      sr.reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
      sr.reveal('.home-content h1, .about-img img', { origin: 'left' });
      sr.reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
    });
  }, []);

  return (
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
            <span className="greeting-text">Hello, I am</span>
            <div className="greeting-decoration"></div>
          </div>
          <h1>
            <span className="name-part">Boyan</span>
            <span className="name-part">Georgiev</span>
          </h1>
          <div className="role-container">
            <h3 className="role-text">Software Developer</h3>
            <div className="role-underline"></div>
          </div>

          <div className="home-stats">
            <div className="stat-box">
              <AnimatedCounter end="2" suffix="+" duration={5000} delay={800} />
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-box">
              <AnimatedCounter end="15" suffix="+" duration={6000} delay={1200} />
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-box">
              <AnimatedCounter end="100" suffix="%" duration={7000} delay={1600} />
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          <div className="social-media">
            <a href="https://www.linkedin.com/in/boyan-georgiev-08853329b/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/boyangeorgiev25" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
            <a href="https://www.instagram.com/boqn_g/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt'></i></a>
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>

      <div className="profession-container">
        <div className="profession-box">
          <div className="profession" style={{ '--i': 0 }}>
            <i className='bx bx-code-alt'></i>
            <h3>Web Developer</h3>
          </div>
          <div className="profession" style={{ '--i': 1 }}>
            <i className='bx bx-camera'></i>
            <h3>Photographer</h3>
          </div>
          <div className="profession" style={{ '--i': 2 }}>
            <i className='bx bx-palette'></i>
            <h3>Web Designer</h3>
          </div>
          <div className="profession" style={{ '--i': 3 }}>
            <i className='bx bx-video-recording'></i>
            <h3>Videographer</h3>
          </div>

          <div className="circle"></div>
        </div>

        <div className="overlay"></div>
      </div>

      <div className="home-img">
        <img src="images/Home.png" alt="" />
      </div>
    </section>
  );
};

export default Home;