import { useEffect } from 'react';
import AnimatedCounter from '../common/AnimatedCounter';
import TextType from '../common/TextType';
import ShinyText from '../common/ShinyText';
import '../../styles/components/home.css';

function Home() {

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
          <div className="grid-overlay"></div>
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>

        <div className="floating-elements">
          <div className="float-icon float-1"><i className='bx bx-code-curly'></i></div>
          <div className="float-icon float-2"><i className='bx bx-palette'></i></div>
          <div className="float-icon float-3"><i className='bx bx-rocket'></i></div>
          <div className="float-icon float-4"><i className='bx bx-bug'></i></div>
          <div className="float-icon float-5"><i className='bx bx-coffee'></i></div>
          <div className="float-icon float-6"><i className='bx bx-laptop'></i></div>
        </div>

        <div className="home-main-content">
          <div className="content-grid">
            <div className="intro-section">
              <div className="greeting">
                <span className="greeting-text">Hello, I'm</span>
              </div>
              <h1 className="hero-name">
                <span className="name-part first-name">Boyan</span>
                <span className="name-part last-name">Georgiev</span>
              </h1>
              <div className="role-container">
                <h2 className="role-text">
                  <TextType
                    text={["Software Developer", "Web Designer", "Problem Solver"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </h2>
              </div>
              <p className="hero-description">
                Building digital experiences that combine creativity with clean, functional code.
              </p>
            </div>

            <div className="side-content">
              <div className="stats-showcase">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className='bx bx-time-five'></i>
                  </div>
                  <div className="stat-number">
                    <AnimatedCounter
                      end="2"
                      suffix="+"
                      duration={2000}
                      delay={800}
                    />
                  </div>
                  <span className="stat-label">Years</span>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className='bx bx-code-alt'></i>
                  </div>
                  <div className="stat-number">
                    <AnimatedCounter
                      end="15"
                      suffix="+"
                      duration={2500}
                      delay={1200}
                    />
                  </div>
                  <span className="stat-label">Projects</span>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className='bx bx-happy-heart-eyes'></i>
                  </div>
                  <div className="stat-number">
                    <AnimatedCounter
                      end="100"
                      suffix="%"
                      duration={3000}
                      delay={1600}
                    />
                  </div>
                  <span className="stat-label">Happy</span>
                </div>
              </div>

              <div className="action-buttons">
                <a href="#contact" className="btn btn-primary">
                  <ShinyText text="Let's Chat" speed={3} />
                  <i className='bx bx-right-arrow-alt'></i>
                </a>
              </div>

              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/boyan-georgiev-08853329b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/boyangeorgiev25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/boqn_g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-instagram-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <i className='bx bx-chevron-down'></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
