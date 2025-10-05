import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '../common/AnimatedCounter';
import TextType from '../common/TextType';
import ShinyText from '../common/ShinyText';
import MagicBento from '../common/MagicBento';
import { blogPosts } from '../../data/blogPosts';

function Home() {
  const navigate = useNavigate();
  const featuredBlogs = blogPosts.slice(0, 3);

  const blogCards = featuredBlogs.map(post => ({
    color: 'transparent',
    title: post.title,
    description: post.excerpt.substring(0, 100) + '...',
    label: new Date(post.date).toLocaleDateString('en-GB'),
    onClick: () => navigate(`/blog/${post.id}`)
  }));

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

        <div className="home-blog-container">
          <div className="home-blog-header">
            <h3>Latest Insights & Ideas</h3>
          </div>
          <MagicBento
            cards={blogCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={350}
            particleCount={15}
            glowColor="117, 78, 249"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
