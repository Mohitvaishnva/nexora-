import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-block footer-about">
            <div className="footer-brand-name">NEXORA Tech Services</div>
            <p className="footer-description">
              Where Innovation Meets Technology. Your trusted HP authorized partner for laptops,
              desktops, printers, and repair services.
            </p>
          </div>

          <div className="footer-block">
            <h4>Quick Links</h4>
            <nav className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/laptops" className="footer-link">Laptops</Link>
              <Link to="/desktops" className="footer-link">Desktops</Link>
              <Link to="/printers" className="footer-link">Printers</Link>
              <Link to="/hp-care" className="footer-link">HP Care</Link>
              <Link to="/repair" className="footer-link">Laptop Repair</Link>
              <Link to="/support" className="footer-link">On-site Support</Link>
              <Link to="/offers" className="footer-link">Special Offers</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </nav>
          </div>

          <div className="footer-block">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Address</span>
                <span className="contact-value">
                  Shop No.39, Ch. Bashir Ali Market<br />
                  Near Pari Chowk, Haldauna Tugalpur<br />
                  Greater Noida
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+917500858389" className="contact-link">
                  +91 7500858389
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:info@nexora-in.com" className="contact-link">
                  info@nexora-in.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Hours</span>
                <span className="contact-value">Mon – Sun: 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025 NEXORA Tech Services. All rights reserved. | Authorized HP Partner
        </div>
      </div>
    </footer>
  );
};

export default Footer;
