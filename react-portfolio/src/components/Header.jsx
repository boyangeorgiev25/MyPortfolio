import React, { useState } from 'react';
import { useTheme } from '../ThemeContext.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="header">
      <a href="#" className="logo">Boyan's Blog.</a>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a 
          href="#home" 
          className="active"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a 
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
        <a 
          href="#services"
          onClick={(e) => handleNavClick(e, 'services')}
        >
          Services
        </a>
        <a 
          href="#portfolio"
          onClick={(e) => handleNavClick(e, 'portfolio')}
        >
          Portfolio
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