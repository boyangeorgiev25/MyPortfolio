import React, { useEffect } from 'react';

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
            <h3 className="role-text">Web Developer & Student</h3>
            <div className="role-underline"></div>
          </div>
          <div className="description">
            <p className="main-desc">
              I'm passionate about creating beautiful and functional websites
              that make a difference in the world.
            </p>
            <p className="sub-desc">Currently studying at Karel de Grote University College (KDG), learning modern web technologies like HTML, CSS, JavaScript, React, and more.</p>
          </div>

          <div className="home-stats">
            <div className="stat-box">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          <div className="social-media">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>

          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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