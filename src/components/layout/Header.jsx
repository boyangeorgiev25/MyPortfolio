import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { isDarkMode, toggleTheme } = useTheme();
  let navigate = useNavigate();
  let location = useLocation();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // go to home page first if we're somewhere else
    if (location.pathname !== '/') {
      navigate('/');
      // wait a sec then scroll to the right section
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // already on home, just scroll
      let element = document.getElementById(targetId);
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
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a 
          href="/about-me"
          className={location.pathname === '/about-me' ? 'active' : ''}
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
          className={location.pathname.startsWith('/blog') ? 'active' : ''}
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
