import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import Header from './components/layout/Header';

// Page Components
import Portfolio from './components/pages/Portfolio';
import AboutMePage from './components/pages/AboutMePage';
import PageNotFound from './components/pages/PageNotFound';

// Blog Components
import BlogPage from './components/blog/BlogPage';
import BlogPost from './components/blog/BlogPost';

// Project Components
import WorldWise from './components/projects/WorldWise';
import FarAway from './components/projects/FarAway';
import Quarto from './components/projects/Quarto';

// Common Components
import LoadingScreen from './components/common/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';

// Styles
import './styles/App.css';
import './styles/SectionTransitions.css';
import './styles/EnhancedLayout.css';
import './styles/ProjectsGoalsEnhanced.css';
import './styles/MobileOptimized.css';
import './styles/Blog.css';

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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/project/worldwise" element={<WorldWise />} />
            <Route path="/project/far-away" element={<FarAway />} />
            <Route path="/project/quarto" element={<Quarto />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;