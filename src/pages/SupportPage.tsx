import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const SupportPage: React.FC = () => {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>On-Site Support Services</h1>
            <p className="description">
              Professional technical support at your location. Our certified technicians bring expertise
              directly to your home or office for convenient, reliable service.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary btn-lg">Request Support</Link>
              <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call: +91 7500858389</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Support Services</h2>
          </div>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-icon">🏠</div>
              <h3>Home Support</h3>
              <ul>
                <li>Computer setup & installation</li>
                <li>Network setup & troubleshooting</li>
                <li>Printer installation</li>
                <li>Software installation</li>
                <li>Data backup & recovery</li>
              </ul>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">🏢</div>
              <h3>Office Support</h3>
              <ul>
                <li>Multi-system setup</li>
                <li>Network infrastructure</li>
                <li>Server maintenance</li>
                <li>Employee training</li>
                <li>Regular IT support</li>
              </ul>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">⚡</div>
              <h3>Emergency Support</h3>
              <ul>
                <li>Same-day service available</li>
                <li>Critical issue resolution</li>
                <li>24/7 emergency support</li>
                <li>Fast response times</li>
                <li>Priority scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Support Packages</h2>
            <p className="subtitle">Flexible support plans for your needs</p>
          </div>
          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">Basic Support</h3>
                <p className="plan-tagline">Single issue resolution</p>
                <div className="plan-price">₹1,999</div>
              </div>
              <ul className="plan-features">
                <li>2-4 hours on-site support</li>
                <li>Single issue resolution</li>
                <li>Basic troubleshooting</li>
                <li>Setup assistance</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Choose Package</Link>
            </div>

            <div className="plan-card popular">
              <span className="popular-badge">Most Popular</span>
              <div className="plan-header">
                <h3 className="plan-name">Standard Support</h3>
                <p className="plan-tagline">Half-day comprehensive support</p>
                <div className="plan-price">₹3,499</div>
              </div>
              <ul className="plan-features">
                <li>4-6 hours on-site support</li>
                <li>Multiple issues</li>
                <li>Network configuration</li>
                <li>Software installation</li>
                <li>Basic training</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Choose Package</Link>
            </div>

            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">Premium Support</h3>
                <p className="plan-tagline">Full-day dedicated support</p>
                <div className="plan-price">₹5,999</div>
              </div>
              <ul className="plan-features">
                <li>8+ hours on-site support</li>
                <li>Comprehensive setup</li>
                <li>Complete system configuration</li>
                <li>Staff training included</li>
                <li>Follow-up support</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Choose Package</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Service Coverage Areas</h2>
            <p className="subtitle">We serve the entire Delhi NCR region</p>
          </div>
          <div className="coverage-list">
            <div className="coverage-item">Greater Noida</div>
            <div className="coverage-item">Noida</div>
            <div className="coverage-item">Delhi</div>
            <div className="coverage-item">Gurgaon</div>
            <div className="coverage-item">Faridabad</div>
            <div className="coverage-item">Ghaziabad</div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)', color: 'var(--color-gray-600)' }}>
            Need service in another area? Contact us for custom coverage options.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our On-site Support?</h2>
          </div>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-icon">🚗</div>
              <h3>Convenient Service</h3>
              <p>We come to you - no need to disconnect and transport equipment</p>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">⚡</div>
              <h3>Quick Response</h3>
              <p>Fast scheduling with same-day service available for emergencies</p>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">👨‍💼</div>
              <h3>Expert Technicians</h3>
              <p>Certified professionals with years of experience</p>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">✓</div>
              <h3>Complete Solutions</h3>
              <p>Comprehensive support for all your technology needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Contact Us</h3>
              <p>Call or fill out the request form</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Schedule Visit</h3>
              <p>We arrange a convenient time</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Expert Service</h3>
              <p>Our technician resolves your issues</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Follow-up</h3>
              <p>We ensure everything works perfectly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Need Technical Support Today?</h2>
          <p className="subtitle">
            Contact us now to schedule on-site support at your convenience.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-secondary btn-lg">Request Support Now</Link>
            <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call: +91 7500858389</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
