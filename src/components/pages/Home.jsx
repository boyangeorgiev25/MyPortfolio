import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedCounter from "../common/AnimatedCounter";
import { blogPosts } from "../../data/blogPosts";

function Home() {
  const navigate = useNavigate();
  const featuredBlogs = blogPosts.slice(0, 3); // just show first 3 posts
  // scroll animations - borrowed this code from a tutorial
  useEffect(() => {
    import("scrollreveal").then(({ default: ScrollReveal }) => {
      let sr = ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      // animate things coming from different directions
      sr.reveal(".home-content, .heading", { origin: "top" });
      sr.reveal(
        ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
        { origin: "bottom" }
      );
      sr.reveal(".home-content h1, .about-img img", { origin: "left" });
      sr.reveal(".home-content h3, .home-content p, .about-content", {
        origin: "right",
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
              <h3 className="role-text">a Software Developer</h3>
              <div className="role-underline"></div>
            </div>

            <div className="home-stats">
              <div className="stat-box">
                <AnimatedCounter end="2" suffix="+" duration={5000} delay={800} />
                <span className="stat-label">years coding</span>
              </div>
              <div className="stat-box">
                <AnimatedCounter end="15" suffix="+" duration={6000} delay={1200} />
                <span className="stat-label">projects built</span>
              </div>
              <div className="stat-box">
                <AnimatedCounter end="100" suffix="%" duration={7000} delay={1600} />
                <span className="stat-label">coffee consumed</span>
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
                Let's chat!
              </a>
            </div>
          </div>
        </div>

        <div className="home-blog-container">
          <div className="home-blog-header">
            <h3>What I've been writing about</h3>
          </div>
          <div className="home-blog-grid">
            {featuredBlogs.map((post) => (
              <div
                key={post.id}
                className="home-blog-card"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-date">
                      {new Date(post.date).toLocaleDateString("en-GB")}
                    </span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt.substring(0, 120)}...</p>
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="blog-mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {post.featured && <div className="featured-indicator">★</div>}
              </div>
            ))}
          </div>
          <div className="home-blog-cta">
            <button
              className="btn-view-all-blogs"
              onClick={() => navigate("/blog")}
            >
              Read more stuff
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
