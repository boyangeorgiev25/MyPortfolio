import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

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
      <article className="blog-post-content">
        <header className="post-header">
          <h1>{post.title}</h1>
          
          <div className="post-meta">
            <span className="date">{new Date(post.date).toLocaleDateString('en-GB', { 
              day: 'numeric',
              month: 'numeric',
              year: 'numeric' 
            })}</span>
            <span className="separator">•</span>
            <span className="read-time">{post.readTime}</span>
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
              ← Back to Blog
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;