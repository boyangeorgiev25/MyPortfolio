import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header className="header">
      <a href="#" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Boyan's Blog.</a>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a 
          href="#home" 
          className="active"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a 
          href="/about-me"
          onClick={(e) => { e.preventDefault(); navigate('/about-me'); closeMenu(); }}
        >
          About
        </a>
        <a 
          href="#projects"
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          Projects
        </a>
        <a 
          href="/blog"
          onClick={(e) => { e.preventDefault(); navigate('/blog'); closeMenu(); }}
        >
          Blog
        </a>
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </nav>

      <div 
        className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`} 
        id="darkMode-icon"
        onClick={toggleTheme}
      ></div>

      <div 
        className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} 
        id="menu-icon"
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;