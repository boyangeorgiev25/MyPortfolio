import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

function Showcase() {
  const navigate = useNavigate();

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

  const handleKeyPress = (event, postId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavigateToPost(postId);
    }
  };

  if (!postsToShow.length) {
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
          <button type="button" className="showcase-button" onClick={handleNavigateToBlog}>
            Browse the full blog
          </button>
        </div>

        <div className="showcase-cards">
          {postsToShow.map((post, index) => (
            <article
              key={post.id}
              className={`showcase-card${index === 0 ? ' showcase-card-featured' : ''}`}
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
              <span className="showcase-card-link">{index === 0 ? 'Read article' : 'Open post'}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
