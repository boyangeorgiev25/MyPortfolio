import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts.js';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Blog Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <button className="btn" onClick={() => navigate('/blog')}>
          Back to Blog
        </button>
      </div>
    );
  }

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="blog-post-page">
      <div className="blog-post-header">
        <div className="breadcrumbs">
          <button onClick={handleBackToHome} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-separator">/</span>
          <button onClick={handleBackToBlog} className="breadcrumb-link">Blog</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{post.title}</span>
        </div>
      </div>

      <article className="blog-post-content">
        <header className="post-header">
          <div className="post-meta">
            <span className="date">{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span className="separator">•</span>
            <span className="read-time">{post.readTime}</span>
            {post.featured && (
              <>
                <span className="separator">•</span>
                <span className="featured-indicator">Featured</span>
              </>
            )}
          </div>
          
          <h1>{post.title}</h1>
          
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="post-body">
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index}>{line.substring(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index}>{line.substring(3)}</h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={index}>{line.substring(4)}</h3>;
            } else if (line.startsWith('- ')) {
              return <li key={index}>{line.substring(2)}</li>;
            } else if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={index}><strong>{line.slice(2, -2)}</strong></p>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>

        <footer className="post-footer">
          <div className="post-navigation">
            <button className="btn btn-secondary" onClick={handleBackToBlog}>
              ← Back to All Posts
            </button>
            <button className="btn" onClick={handleBackToHome}>
              Back to Portfolio
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;