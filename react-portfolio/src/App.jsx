import React, { useEffect } from 'react';
import { ThemeProvider } from './ThemeContext.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
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

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;