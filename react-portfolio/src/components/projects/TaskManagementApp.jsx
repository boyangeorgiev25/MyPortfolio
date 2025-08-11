import React from 'react';
import './ProjectDetail.css';

const TaskManagementApp = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Task Management App</h1>
        <div className="project-meta">
          <span className="tech-stack">React Native • Firebase • Redux</span>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-images">
          <div className="main-image">
            <img src="/images/1.png" alt="Task Management App" />
          </div>
          <div className="additional-images">
            <img src="/images/1.png" alt="Task Management App - Kanban Board" />
            <img src="/images/1.png" alt="Task Management App - Team View" />
          </div>
        </div>
        
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>
            A cross-platform mobile application designed to help teams collaborate effectively on projects. 
            Features intuitive drag-and-drop kanban boards, real-time collaboration, and offline capabilities 
            to ensure productivity regardless of connection status.
          </p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Drag-and-drop kanban board interface</li>
            <li>Real-time team collaboration</li>
            <li>Offline synchronization</li>
            <li>Push notifications for task updates</li>
            <li>Team member assignment and permissions</li>
            <li>Progress tracking and analytics</li>
            <li>File attachments and comments</li>
          </ul>
          
          <h3>Technical Challenges</h3>
          <p>
            Key challenges included implementing smooth drag-and-drop interactions on mobile devices, 
            handling offline data synchronization, and managing real-time updates across multiple users 
            without conflicts.
          </p>
          
          <h3>Technologies Used</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <strong>Mobile:</strong> React Native, Expo
            </div>
            <div className="tech-item">
              <strong>State Management:</strong> Redux, Redux Persist
            </div>
            <div className="tech-item">
              <strong>Backend:</strong> Firebase Firestore, Cloud Functions
            </div>
            <div className="tech-item">
              <strong>Authentication:</strong> Firebase Auth
            </div>
            <div className="tech-item">
              <strong>Notifications:</strong> Firebase Cloud Messaging
            </div>
          </div>
          
          <div className="project-links">
            <a href="#" className="btn">Download APK</a>
            <a href="#" className="btn btn-outline">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementApp;