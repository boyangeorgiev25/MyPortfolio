import React from 'react';

function Goals() {
  // where I want to be eventually
  let goals = [
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

  return (
    <section className="services goals-section" id="goals">
      <div className="section-header">
        <h2 className="heading">My <span>Goals</span></h2>
        <p className="section-description">
          Where I\'m heading as a computer science student
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
          <h4>My Learning Path</h4>
          <p>These goals guide my studies and development as a student, while staying flexible as I discover what aspects of programming I enjoy most.</p>
        </div>
      </div>
    </section>
  );
};

export default Goals;