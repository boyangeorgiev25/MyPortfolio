import React from 'react';

// simple footer with back to top button
function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 | All Rights Reserved.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home" onClick={scrollToTop}>
          <i className='bx bx-up-arrow-alt'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;