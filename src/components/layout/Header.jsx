import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import GlassSurface from '../common/GlassSurface';
import '../../styles/components/header.css';

const NAV_ITEMS = [
  { key: 'home', icon: 'bx-home', label: 'Home', type: 'scroll', target: 'home' },
  { key: 'projects', icon: 'bx-briefcase', label: 'Projects', type: 'scroll', target: 'projects', desktopOnly: true },
  { key: 'blog', icon: 'bx-news', label: 'Blog', type: 'route', target: '/blog', matchPrefix: true },
  { key: 'contact', icon: 'bx-envelope', label: 'Contact', type: 'scroll', target: 'contact', desktopOnly: true }
];

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth <= 768;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (event, item) => {
    if (item.type === 'scroll') {
      event.preventDefault();

      const navigateHomeFirst = location.pathname !== '/';

      const scrollToSection = () => {
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      if (navigateHomeFirst) {
        navigate('/');
        setTimeout(scrollToSection, 120);
      } else {
        scrollToSection();
      }
      return false;
    }

    event.preventDefault();
    if (item.matchPrefix) {
      if (!location.pathname.startsWith(item.target)) {
        navigate(item.target);
      }
      return false;
    }

    if (location.pathname !== item.target) {
      navigate(item.target);
    }

    return false;
  };

  const isRouteActive = (item) => {
    if (item.type !== 'route') {
      return false;
    }

    if (item.matchPrefix) {
      return location.pathname !== item.target && location.pathname.startsWith(`${item.target}/`);
    }

    return location.pathname === item.target;
  };

  return (
    <header className="header">
      {isMobile ? (
        <>
          <button
            type="button"
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`}></i>
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
          <div className="mobile-nav-wrapper">
            <nav className="mobile-nav">
              {NAV_ITEMS.filter(item => !item.desktopOnly).map((item) => {
                const href = item.type === 'route' ? item.target : `#${item.target}`;
                const isActive = item.type === 'route'
                  ? (item.matchPrefix
                      ? (location.pathname !== item.target && location.pathname.startsWith(`${item.target}/`))
                      : location.pathname === item.target)
                  : (location.pathname === '/' && item.target === 'home');

                return (
                  <a
                    key={item.key}
                    href={href}
                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                    onClick={(event) => handleNavClick(event, item)}
                  >
                    <i className={`bx ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </>
      ) : (
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={30}
          displace={8}
          distortionScale={-100}
          redOffset={0}
          greenOffset={6}
          blueOffset={12}
          brightness={60}
          opacity={0.95}
          className="header-glass-navbar"
        >
          <nav className="navbar text-navbar">
            {NAV_ITEMS.filter(item => !item.mobileOnly).map((item) => {
              const href = item.type === 'scroll' ? `#${item.target}` : item.target;
              const activeClass = isRouteActive(item) ? 'active' : '';

              return (
                <a
                  key={item.key}
                  href={href}
                  className={activeClass}
                  onClick={(event) => handleNavClick(event, item)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            className="mode-toggle"
            id="darkMode-icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`} aria-hidden="true"></i>
          </button>
        </GlassSurface>
      )}
    </header>
  );
}

export default Header;
