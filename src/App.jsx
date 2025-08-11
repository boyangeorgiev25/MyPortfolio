import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext.jsx';
import Header from './components/Header.jsx';
import Portfolio from './components/Portfolio.jsx';
import WorldWise from './components/projects/WorldWise.jsx';
import FarAway from './components/projects/FarAway.jsx';
import AboutMePage from './components/AboutMePage.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import './App.css';
import './components/SectionTransitions.css';
import './components/EnhancedLayout.css';
import './components/ProjectsGoalsEnhanced.css';
import './components/MobileOptimized.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          });
        }
      });

      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/project/worldwise" element={<WorldWise />} />
            <Route path="/project/far-away" element={<FarAway />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;