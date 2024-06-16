import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link to="/" className="footer-logo-link">
          
        </Link>
        <span className="footer-text">© 2024 GoFood, Inc</span>
      </div>
  
      
    </footer>
  );
}

export default Footer;
