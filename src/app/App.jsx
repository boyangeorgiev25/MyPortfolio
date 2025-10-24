import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Portfolio from '../components/pages/Portfolio';
import AboutMePage from '../components/pages/AboutMePage';
import PageNotFound from '../components/pages/PageNotFound';
import BlogPage from '../components/blog/BlogPage';
import BlogPost from '../components/blog/BlogPost';
import WorldWise from '../components/projects/WorldWise';
import FarAway from '../components/projects/FarAway';
import Quarto from '../components/projects/Quarto';
import LoadingScreen from '../components/common/LoadingScreen';
import ScrollToTop from '../components/common/ScrollToTop';
import '../styles/layouts/global.css';
import '../styles/base/transitions.css';
import '../styles/layouts/enhanced.css';
import '../styles/components/projects-goals.css';
import '../styles/layouts/mobile.css';
import '../styles/components/blog.css';
import '../styles/components/showcase.css';

const LOADING_DURATION = 1500;
const SCROLL_OFFSET = 150;
const STICKY_HEADER_THRESHOLD = 100;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isHomeRoute = window.location.pathname === '/';
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('header nav a');

          if (isHomeRoute) {
            sections.forEach(sec => {
              const top = window.scrollY;
              const offset = sec.offsetTop - SCROLL_OFFSET;
              const height = sec.offsetHeight;
              const id = sec.getAttribute('id');

              if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                  link.classList.remove('active');
                });
                if (id) {
                  const activeLink = document.querySelector(`header nav a[href*=${id}]`);
                  if (activeLink) {
                    activeLink.classList.add('active');
                  }
                }
              }
            });
          }

          const header = document.querySelector('.header');
          if (header) {
            header.classList.toggle('sticky', window.scrollY > STICKY_HEADER_THRESHOLD);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
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
