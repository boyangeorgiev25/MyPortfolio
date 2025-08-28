import React from 'react';

function Goals() {
  // where I want to be eventually
  let goals = [
    {
      icon: 'bx-trophy',
      title: 'Get really good at full-stack',
      description: 'Right now I\'m decent at React, but I want to master both frontend and backend. Planning to dive deep into Node.js, databases, and maybe some cloud stuff too.',
      timeline: '2024-2025'
    },
    {
      icon: 'bx-group',
      title: 'Help other developers grow',
      description: 'Eventually I\'d love to mentor people who are just starting out. I remember how confusing everything was at first - would be cool to help others through that.',
      timeline: '2025-2026'
    },
    {
      icon: 'bx-rocket',
      title: 'Build something that matters',
      description: 'Maybe start my own thing someday? I\'ve got a few app ideas that could actually help people. Nothing crazy, just simple solutions to real problems.',
      timeline: '2026+'
    },
    {
      icon: 'bx-book-open',
      title: 'Keep learning new stuff',
      description: 'Tech changes so fast! I want to contribute to open source projects and maybe write about what I learn. Sharing knowledge is pretty cool.',
      timeline: 'Ongoing'
    }
  ];

  return (
    <section className="services goals-section" id="goals">
      <div className="section-header">
        <h2 className="heading">My <span>Goals</span></h2>
        <p className="section-description">
          where I\'m trying to go with this whole coding thing
        </p>
      </div>

      <div className="goals-gallery">
        <div className="gallery-container">
          <div className="gallery-track">
            {goals.map((goal, i) => (
              <div key={i} className="goal-card">
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
          <h4>The plan</h4>
          <p>These aren\'t set in stone - just stuff I\'m working towards. Some might change as I learn more about what I actually enjoy doing.</p>
        </div>
      </div>
    </section>
  );
};

export default Goals;