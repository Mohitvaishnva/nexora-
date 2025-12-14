import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const HPCarePage: React.FC = () => {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>HP Care Services</h1>
            <p className="description">
              Protect your HP investment with comprehensive care services. Extended warranties, expert support,
              and proactive maintenance to keep your devices running smoothly.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get HP Care</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>HP Care Service Features</h2>
            <p className="subtitle">Comprehensive protection and support for your HP devices</p>
          </div>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-icon">⚡</div>
              <h3>Extended Warranty</h3>
              <ul>
                <li>Extended hardware protection</li>
                <li>Parts and labor coverage</li>
                <li>No additional costs</li>
                <li>Peace of mind protection</li>
              </ul>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">24</div>
              <h3>Next Business Day Support</h3>
              <ul>
                <li>Fast response times</li>
                <li>Priority service queue</li>
                <li>Minimal downtime</li>
                <li>Dedicated support line</li>
              </ul>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">⚙️</div>
              <h3>Proactive Management</h3>
              <ul>
                <li>Regular health checks</li>
                <li>Preventive maintenance</li>
                <li>Software updates</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Choose Your HP Care Plan</h2>
            <p className="subtitle">Select the perfect protection plan for your HP device</p>
          </div>
          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">HP Care Basic</h3>
                <p className="plan-tagline">Essential protection for your device</p>
                <div className="plan-price">Starting from ₹2,999</div>
              </div>
              <ul className="plan-features">
                <li>1-year extended warranty</li>
                <li>Hardware coverage</li>
                <li>Email support</li>
                <li>Remote diagnostics</li>
                <li>Parts replacement</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>

            <div className="plan-card popular">
              <span className="popular-badge">Most Popular</span>
              <div className="plan-header">
                <h3 className="plan-name">HP Care Plus</h3>
                <p className="plan-tagline">Comprehensive coverage & priority support</p>
                <div className="plan-price">Starting from ₹5,999</div>
              </div>
              <ul className="plan-features">
                <li>2-year extended warranty</li>
                <li>Hardware & software coverage</li>
                <li>Phone & email support</li>
                <li>Next business day service</li>
                <li>On-site repairs available</li>
                <li>Accidental damage protection</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>

            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">HP Care Enterprise</h3>
                <p className="plan-tagline">Premium support for businesses</p>
                <div className="plan-price">Custom pricing</div>
              </div>
              <ul className="plan-features">
                <li>3+ year extended warranty</li>
                <li>Complete hardware/software coverage</li>
                <li>24/7 dedicated support</li>
                <li>Same-day on-site service</li>
                <li>Fleet management</li>
                <li>Dedicated account manager</li>
                <li>Custom SLAs available</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why HP Care?</h2>
          </div>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-icon">HP</div>
              <h3>HP Certified</h3>
              <p>Official HP-authorized care plans with genuine support</p>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">✓</div>
              <h3>Genuine Parts</h3>
              <p>Only authentic HP parts used for all repairs</p>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Quick turnaround times to minimize downtime</p>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">👨‍💼</div>
              <h3>Expert Support</h3>
              <p>Certified technicians with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>How HP Care Works</h2>
            <p className="subtitle">Simple steps to protect your HP device</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Choose Your Plan</h3>
              <p>Select the HP Care plan that fits your needs</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Register Your Device</h3>
              <p>We'll register your device and activate coverage</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Get Support</h3>
              <p>Contact us whenever you need assistance</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Expert Resolution</h3>
              <p>Our team resolves your issues quickly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Ready to Protect Your HP Investment?</h2>
          <p className="subtitle">
            Contact us today to learn more about HP Care plans and get started.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-secondary btn-lg">Get HP Care Today</Link>
            <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call: +91 7500858389</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HPCarePage;
