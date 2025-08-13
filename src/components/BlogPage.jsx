import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts.js';

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState('All');
  
  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];
  
  const filteredPosts = selectedTag === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>My <span>Blog</span></h1>
          <p>Thoughts, tutorials, and insights about web development and technology</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-filters">
            <h3>Filter by Topic:</h3>
            <div className="filter-tags">
              {allTags.map((tag) => (
                <button 
                  key={tag} 
                  className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => handleTagFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-posts-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  {post.featured && <span className="featured-badge">Featured</span>}
                </div>
                
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <button 
                    className="btn-read-more"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read Full Article
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <p>No posts found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;