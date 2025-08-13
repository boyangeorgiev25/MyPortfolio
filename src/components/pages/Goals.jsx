import React from 'react';

const Goals = () => {
  const goals = [
    {
      icon: 'bx-trophy',
      title: 'Master Full-Stack Development',
      description: 'Become proficient in both frontend and backend technologies, with expertise in React, Node.js, and cloud platforms. Building scalable applications that solve real-world problems.',
      timeline: '2024-2025'
    },
    {
      icon: 'bx-group',
      title: 'Lead Development Teams',
      description: 'Develop strong leadership skills to guide development teams, mentor junior developers, and drive technical decisions that deliver exceptional user experiences.',
      timeline: '2025-2026'
    },
    {
      icon: 'bx-rocket',
      title: 'Launch Tech Startup',
      description: 'Create innovative software solutions that make a positive impact. Focus on building products that solve meaningful problems and contribute to technological advancement.',
      timeline: '2026+'
    },
    {
      icon: 'bx-book-open',
      title: 'Continuous Learning',
      description: 'Stay current with emerging technologies, contribute to open-source projects, and share knowledge with the developer community through writing and speaking.',
      timeline: 'Ongoing'
    }
  ];

  return (
    <section className="services goals-section" id="goals">
      <div className="section-header">
        <h2 className="heading">My <span>Goals</span></h2>
        <p className="section-description">
          Charting my path to success in web development
        </p>
      </div>

      <div className="goals-gallery">
        <div className="gallery-container">
          <div className="gallery-track">
            {goals.map((goal, index) => (
              <div key={index} className="goal-card">
                <div className="card-header">
                  <div className="goal-icon">
                    <i className={`bx ${goal.icon}`}></i>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="goal-title">{goal.title}</h3>
                  <span className="goal-timeline">{goal.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="gallery-indicators">
          {goals.map((_, index) => (
            <div key={index} className="gallery-dot"></div>
          ))}
        </div>
      </div>
      
      <div className="goals-summary">
        <div className="summary-card">
          <h4>Journey Overview</h4>
          <p>Each goal represents a milestone in my continuous growth as a web developer, focusing on technical excellence, leadership, and making a positive impact.</p>
        </div>
      </div>
    </section>
  );
};

export default Goals;