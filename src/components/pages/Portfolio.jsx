import React from 'react';

// Page Components
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Goals from './Goals';
import Contact from './Contact';

// Layout Components
import Footer from '../layout/Footer';

const Portfolio = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;