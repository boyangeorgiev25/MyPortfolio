import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteMenu from '../common/InfiniteMenu';
import { blogPosts } from '../../data/blogPosts';

function Showcase() {
  const navigate = useNavigate();

  const blogImages = {
    5: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=1200&fit=crop&q=95',
    4: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&h=900&fit=crop&q=80',
    2: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=900&h=900&fit=crop&q=80',
    3: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=900&fit=crop&q=80'
  };

  const showcaseItems = blogPosts.map(post => ({
    image: blogImages[post.id] || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=900&fit=crop',
    link: `/blog/${post.id}`,
    title: post.title,
    description: post.excerpt
  }));

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-header">
        <div className="showcase-main-title">
          <span className="showcase-main-title-my">My</span>
          <span className="showcase-main-title-blogs">Blogs</span>
        </div>
      </div>
      <InfiniteMenu items={showcaseItems} />
    </section>
  );
}

export default Showcase;
