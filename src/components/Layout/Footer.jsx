import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          
          <div className="footer-section">
            <h3>AROUND THE WEB</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        
        <div className="copyright">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;