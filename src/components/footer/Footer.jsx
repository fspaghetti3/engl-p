import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made by fspaghett3 &copy; {new Date().getFullYear()}</p>
        <div className="social-links">
          <a href="https://github.com/fspaghetti3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-3x social-icon"></i>
          </a>
          <a href="https://www.instagram.com/fsolleder3/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-3x social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;