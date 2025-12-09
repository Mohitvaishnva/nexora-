import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const DesktopsPage: React.FC = () => {
  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1>HP Desktop Computers</h1>
            <p className="description">
              Powerful HP desktop solutions for every need. From compact all-in-ones to high-performance
              workstations, discover the perfect desktop computer for your home or business.
            </p>
            <div className="hero-features">
              <span className="hero-feature">Genuine HP Products</span>
              <span className="hero-feature">Professional Setup</span>
              <span className="hero-feature">Full Support</span>
            </div>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary btn-lg">Explore Desktops</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Get Expert Advice</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose HP Desktops from NEXORA?</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Authorized HP Desktop Partner</h3>
              <ul>
                <li>Complete HP desktop solutions</li>
                <li>Latest desktop models</li>
                <li>Business & home configurations</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Genuine HP Products & Warranty</h3>
              <ul>
                <li>100% authentic desktops</li>
                <li>Full manufacturer warranty</li>
                <li>Extended warranty available</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Professional Setup & Configuration</h3>
              <ul>
                <li>Complete installation</li>
                <li>OS & driver setup</li>
                <li>Network configuration</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Extended Support & Maintenance</h3>
              <ul>
                <li>Ongoing technical support</li>
                <li>Regular maintenance</li>
                <li>Upgrade assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="series" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>HP Desktop Series</h2>
          </div>
          <div className="series-grid">
            <div className="series-card">
              <div className="series-header">
                <h3>HP All-in-One PCs</h3>
                <p className="tagline">Space-saving design with powerful performance</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Integrated design</li>
                    <li>Full HD displays</li>
                    <li>Wireless connectivity</li>
                    <li>Compact footprint</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹35,000 – ₹80,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="series-card">
              <div className="series-header">
                <h3>HP Elite Series</h3>
                <p className="tagline">Premium business desktops for professional use</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Business-grade security</li>
                    <li>Enterprise management</li>
                    <li>Professional design</li>
                    <li>Reliable performance</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹50,000 – ₹1,20,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="series-card">
              <div className="series-header">
                <h3>HP Pavilion Desktop</h3>
                <p className="tagline">Versatile desktops for home and office use</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Intel/AMD processors</li>
                    <li>Expandable memory</li>
                    <li>Multiple connectivity</li>
                    <li>Energy efficient</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹30,000 – ₹70,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="series-card">
              <div className="series-header">
                <h3>HP Workstations</h3>
                <p className="tagline">High-performance workstations for demanding tasks</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Professional graphics</li>
                    <li>ECC memory support</li>
                    <li>ISV certification</li>
                    <li>Advanced cooling</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹80,000 – ₹3,00,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <h2>Why HP Desktops?</h2>
            <p className="subtitle">Reliability, performance, and innovation in every desktop</p>
          </div>
          <div className="why-features">
            <div className="why-feature">
              <div className="why-icon">🔒</div>
              <h3>Enterprise Security</h3>
              <p>Built-in security features</p>
            </div>
            <div className="why-feature">
              <div className="why-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Powerful processors & graphics</p>
            </div>
            <div className="why-feature">
              <div className="why-icon">🌱</div>
              <h3>Energy Efficient</h3>
              <p>ENERGY STAR certified options</p>
            </div>
            <div className="why-feature">
              <div className="why-icon">⚙️</div>
              <h3>Easy Management</h3>
              <p>Deployment & management tools</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Ready to Upgrade Your Desktop?</h2>
          <p className="subtitle">
            Contact our experts for personalized recommendations and competitive pricing.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-secondary btn-lg">Get Expert Advice</Link>
            <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call: +91 7500858389</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesktopsPage;
