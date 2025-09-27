import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const Blog = () => {
  const navigate = useNavigate();
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const handleViewAllBlogs = () => {
    navigate('/blog');
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-content">
        <h2 className="heading">Latest <span>Blog Posts</span></h2>
        
        {featuredPost && (
          <div className="featured-post">
            <h3>Featured Article</h3>
            <div className="post-card featured">
              <div className="post-content">
                <div className="post-meta">
                  <span className="date">{new Date(featuredPost.date).toLocaleDateString('en-GB')}</span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <h4>{featuredPost.title}</h4>
                <p>{featuredPost.excerpt}</p>
                <div className="post-tags">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="btn-read-more"
                  onClick={() => handleReadMore(featuredPost.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="recent-posts">
          <h3>Recent Posts</h3>
          <div className="posts-grid">
            {recentPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-content">
                  <div className="post-meta">
                    <span className="date">{new Date(post.date).toLocaleDateString('en-GB')}</span>
                    <span className="read-time">{post.readTime}</span>
                    {post.isNew && <span className="new-badge">NEW</span>}
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button 
                    className="btn-read-more"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-cta">
          <button className="btn" onClick={handleViewAllBlogs}>
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;