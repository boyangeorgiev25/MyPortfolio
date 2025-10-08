import React from 'react';
import InfiniteMenu from '../common/InfiniteMenu';
import { blogPosts } from '../../data/blogPosts';

const GRADIENTS = [
  ['#6f3dfc', '#a178ff'],
  ['#7d4dff', '#c4a7ff'],
  ['#5f2dea', '#8f6cff'],
  ['#8a4cff', '#d5b8ff']
];

function Showcase() {
  const showcaseItems = blogPosts.map((post, index) => ({
    gradient: GRADIENTS[index % GRADIENTS.length],
    link: `/blog/${post.id}`,
    title: post.title,
    description: post.excerpt,
    tags: post.tags || [],
    date: new Date(post.date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
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
