import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

function Showcase() {
  const navigate = useNavigate();
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const postsToShow = useMemo(() => {
    if (!blogPosts.length) {
      return [];
    }

    const featured = blogPosts.find(post => post.featured) || blogPosts[0];
    const remaining = blogPosts
      .filter(post => post.id !== featured.id)
      .slice(0, 2);

    return [featured, ...remaining];
  }, []);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

  const handleNavigateToPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const handleNavigateToBlog = () => {
    navigate('/blog');
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleChange = event => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const postsToRender = useMemo(() => (isMobile ? postsToShow.slice(0, 2) : postsToShow), [isMobile, postsToShow]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, postsToRender.length);
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showcase-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [postsToRender]);

  const handleKeyPress = (event, postId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavigateToPost(postId);
    }
  };

  if (!postsToRender.length) {
    return null;
  }

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-container">
        <div className="showcase-top">
          <div className="showcase-header">
            <span className="showcase-eyebrow">From the blog</span>
            <h2 className="showcase-title">Latest lessons & ideas</h2>
            <p className="showcase-subtitle">
              Quick takes on product craftsmanship, developer workflows, and experiments shaping client work.
            </p>
          </div>
          {!isMobile && (
            <button type="button" className="showcase-button" onClick={handleNavigateToBlog}>
              Browse the full blog
            </button>
          )}
        </div>

        <div className="showcase-cards">
          {postsToRender.map((post, index) => (
            <article
              key={post.id}
              className={`showcase-card${index === 0 ? ' showcase-card-featured' : ''}`}
              ref={element => {
                cardsRef.current[index] = element;
              }}
              style={{ '--reveal-delay': `${index * 0.18}s` }}
              onClick={() => handleNavigateToPost(post.id)}
              onKeyDown={(event) => handleKeyPress(event, post.id)}
              role="button"
              tabIndex={0}
            >
              <div className="showcase-card-meta">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="showcase-card-tags">
                {post.tags.slice(0, index === 0 ? 3 : 2).map((tag, tagIndex) => (
                  <span key={tagIndex} className="showcase-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="showcase-card-link">Read article</span>
            </article>
          ))}
        </div>
        {isMobile && (
          <button type="button" className="showcase-button showcase-button--mobile" onClick={handleNavigateToBlog}>
            Browse the full blog
          </button>
        )}
      </div>
    </section>
  );
}

export default Showcase;
