import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/store', label: 'Store' },
    { path: '/hp-care', label: 'HP Care' },
    { path: '/repair', label: 'Repair' },
    { path: '/support', label: 'Support' },
    { path: '/status', label: 'Track Status' },
    { path: '/offers', label: 'Offers' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <div className="brand-content">
            <span className="brand-name">NEXORA</span>
            <span className="brand-subtext">Tech Services</span>
          </div>
        </Link>

        <div className="header-right">
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <span className="hp-badge">Authorized HP Partner</span>
          </nav>

          <button
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-content">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <span className="hp-badge">Authorized HP Partner</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
