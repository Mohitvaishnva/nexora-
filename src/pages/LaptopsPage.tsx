import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const LaptopsPage: React.FC = () => {
  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1>HP Laptops</h1>
            <p className="description">
              Discover the perfect HP laptop for your needs. From everyday computing to professional
              workstations, we offer a complete range of authentic HP laptops with full manufacturer
              warranty and dedicated support.
            </p>
            <div className="hero-features">
              <span className="hero-feature">Genuine HP Products</span>
              <span className="hero-feature">Full Warranty</span>
              <span className="hero-feature">Expert Support</span>
            </div>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Expert Advice
              </Link>
              <a href="#series" className="btn btn-secondary btn-lg">
                View Laptop Series
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy from NEXORA */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Buy HP Laptops from NEXORA?</h2>
            <p className="subtitle">Your trusted HP laptop partner in Greater Noida</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Authorized HP Dealer</h3>
              <ul>
                <li>100% genuine HP laptops</li>
                <li>Full HP-backed warranty</li>
                <li>Latest models & configurations</li>
                <li>Official HP support access</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Genuine HP Warranty</h3>
              <ul>
                <li>Official manufacturer warranty</li>
                <li>Extended warranty options</li>
                <li>Hassle-free claims process</li>
                <li>Warranty registration assistance</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Expert Setup & Configuration</h3>
              <ul>
                <li>Free initial setup</li>
                <li>OS installation & updates</li>
                <li>Driver configuration</li>
                <li>Essential software installation</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>After-sales Support & Repairs</h3>
              <ul>
                <li>Dedicated service center</li>
                <li>Genuine HP parts</li>
                <li>Quick turnaround time</li>
                <li>Ongoing technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Series */}
      <section id="series" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>HP Laptop Series</h2>
            <p className="subtitle">Choose the perfect laptop for your needs</p>
          </div>
          <div className="series-grid">
            {/* HP Pavilion */}
            <div className="series-card">
              <div className="series-header">
                <h3>HP Pavilion Series</h3>
                <p className="tagline">Perfect balance of performance and style for everyday computing</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Intel Core processors</li>
                    <li>8GB – 16GB RAM</li>
                    <li>Full HD display</li>
                    <li>Long battery life</li>
                    <li>Modern design</li>
                    <li>Fast SSD storage</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹40,000 – ₹70,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* HP Envy */}
            <div className="series-card">
              <div className="series-header">
                <h3>HP Envy Series</h3>
                <p className="tagline">Premium laptops with superior design and performance</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Intel Core i5/i7 processors</li>
                    <li>16GB RAM</li>
                    <li>SSD storage</li>
                    <li>Premium build quality</li>
                    <li>High-resolution displays</li>
                    <li>Slim & lightweight</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹70,000 – ₹1,20,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* HP EliteBook */}
            <div className="series-card">
              <div className="series-header">
                <h3>HP EliteBook Series</h3>
                <p className="tagline">Professional business laptops with enterprise-grade security</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Business-grade security</li>
                    <li>Durable construction</li>
                    <li>Professional design</li>
                    <li>Enterprise support</li>
                    <li>Advanced management</li>
                    <li>Long warranty options</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹80,000 – ₹1,50,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* HP Gaming */}
            <div className="series-card">
              <div className="series-header">
                <h3>HP Gaming Series</h3>
                <p className="tagline">High-performance gaming laptops for enthusiasts</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Dedicated graphics cards</li>
                    <li>Gaming keyboards</li>
                    <li>High refresh displays</li>
                    <li>Advanced cooling</li>
                    <li>Powerful processors</li>
                    <li>RGB lighting</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹60,000 – ₹1,80,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container">
          <h2>Ready to Find Your Perfect HP Laptop?</h2>
          <p className="subtitle">
            Visit our store or contact us for personalized recommendations based on your requirements and budget.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Visit Our Store
            </Link>
            <a
              href="https://wa.me/917500858389"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LaptopsPage;
