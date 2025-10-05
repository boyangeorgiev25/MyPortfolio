import React from 'react';
import InfiniteScroll from '../common/InfiniteScroll';

function Goals() {
  const goals = [
    {
      icon: 'bx-trophy',
      title: 'Master Full-Stack Development',
      description: 'Build upon my current React foundation to become proficient in both frontend and backend development. Currently expanding my skills in Node.js, databases, and exploring cloud technologies.',
      timeline: '2024-2025'
    },
    {
      icon: 'bx-group',
      title: 'Help Fellow Students & New Developers',
      description: 'Share what I\'ve learned with other students and developers just starting out. Having been through the initial learning challenges myself, I want to help others navigate their coding journey.',
      timeline: '2025-2026'
    },
    {
      icon: 'bx-rocket',
      title: 'Build Meaningful Projects',
      description: 'Create applications that solve real problems and provide genuine value to users. Focus on developing practical solutions that can make a positive impact, even if small.',
      timeline: '2026+'
    },
    {
      icon: 'bx-book-open',
      title: 'Keep Learning & Contributing',
      description: 'Stay curious about new technologies and contribute to open source projects when possible. Want to document my learning journey and share insights with the developer community.',
      timeline: 'Ongoing'
    }
  ];

  const goalItems = goals.map(goal => ({
    content: (
      <div className="goal-scroll-item" style={{ transform: 'scale(0.85)' }}>
        <div className="goal-icon">
          <i className={`bx ${goal.icon}`}></i>
        </div>
        <div className="goal-content">
          <h3 className="goal-title">{goal.title}</h3>
          <span className="goal-timeline">{goal.timeline}</span>
        </div>
      </div>
    )
  }));

  return (
    <section className="services goals-section" id="goals">
      <div className="section-header goals-section-header">
        <h2>My <span>Goals</span></h2>
      </div>

      <div className="goals-layout">
        <div className="goals-content">
          <div style={{ height: '500px', width: '100%', position: 'relative' }}>
            <InfiniteScroll
              items={goalItems}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={1}
              autoplayDirection="down"
              pauseOnHover={false}
            />
          </div>
        </div>

        <div className="goals-text-content">
          <div className="goals-background-text">
            <span className="text-my">My</span>
            <span className="text-goals">Goals</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;