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
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Boyan Georgiev</h1>
        <p>
          I'm a web developer who loves to create beautiful and functional websites
          for people who want to make a difference in the world.
        </p>
        <p>I'm currently studying at Karel de Grote University College (KDG), where I'm learning to build modern, user-focused websites using HTML, CSS, JavaScript, and WordPress.</p>

        <div className="social-media">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
        </div>

        <a href="#" className="btn">Download CV</a>
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