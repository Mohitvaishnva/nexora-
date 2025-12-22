import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import homeImage from '../components/images/home.png';

const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Trusted HP Authorized Partner in Greater Noida</h1>
              <p className="subtitle">
                We bring you the latest HP technology with expert support, reliable repair services,
                and on-site assistance for homes and businesses across Delhi NCR.
              </p>
              <div className="hero-cta">
                <Link to="/store" className="btn btn-primary btn-lg">
                  Shop HP Laptops
                </Link>
                <Link to="/repair" className="btn btn-secondary btn-lg">
                  Book a Repair
                </Link>
                <Link to="/offers" className="btn-link">
                  View Offers →
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={homeImage} alt="HP Laptop Workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NEXORA */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose NEXORA?</h2>
            <p className="subtitle">Your trusted technology partner in Greater Noida and Delhi NCR.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">HP</div>
              <h3>HP Authorized Partner</h3>
              <p>
                Get authentic HP products with valid warranty backed by HP's official support and quality guarantee.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Expert Repair Services</h3>
              <p>
                Certified technicians with years of experience using only genuine HP parts for all repairs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>On-Site Support</h3>
              <p>
                Home & office visits for setup, troubleshooting, and maintenance at your convenience.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>End-to-End Solutions</h3>
              <p>
                From sales to support & HP Care, we provide complete technology solutions for all your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Technology Products Section */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2>Premium Technology Products</h2>
            <p className="subtitle">Discover our extensive range of technology solutions for home and business</p>
          </div>
          <div className="products-grid">
            {/* Laptops Card */}
            <div className="product-category-card">
              <div className="product-card-image">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop" alt="Laptops" />
                <span className="product-badge">Best Sellers</span>
              </div>
              <div className="product-card-body">
                <div className="product-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                </div>
                <h3>Laptops</h3>
                <p>Business & Gaming laptops from HP, Dell, Lenovo. Thin-and-light models for professionals.</p>
                <Link to="/laptops" className="explore-link">
                  Explore Products <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Printers Card */}
            <div className="product-category-card">
              <div className="product-card-image">
                <img src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=400&fit=crop" alt="Printers" />
                <span className="product-badge">HP Authorized</span>
              </div>
              <div className="product-card-body">
                <div className="product-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                </div>
                <h3>Printers</h3>
                <p>HP & other brand printers – Inkjet, LaserJet, All-in-One solutions for home & office.</p>
                <Link to="/printers" className="explore-link">
                  Explore Products <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Desktops Card */}
            <div className="product-category-card">
              <div className="product-card-image">
                <img src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600&h=400&fit=crop" alt="Desktops & Workstations" />
                <span className="product-badge">Custom Build</span>
              </div>
              <div className="product-card-body">
                <div className="product-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3>Desktops & Workstations</h3>
                <p>Custom builds, branded desktops & professional workstations for demanding tasks.</p>
                <Link to="/desktops" className="explore-link">
                  Explore Products <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Quote CTA */}
          <div className="custom-quote-cta">
            <p>Need something specific? We can source any technology product for you.</p>
            <Link to="/contact" className="btn btn-quote">Custom Quote Request</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p className="subtitle">Comprehensive support for all your HP devices.</p>
          </div>
          <div className="grid grid-3">
            <div className="service-card">
              <h3>HP Care</h3>
              <p>
                Extended warranty & comprehensive care plans to protect your HP investment with expert support.
              </p>
              <Link to="/hp-care" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="service-card">
              <h3>Laptop & Desktop Repair</h3>
              <p>
                Professional repair services with genuine parts and quick turnaround times.
              </p>
              <Link to="/repair" className="btn btn-secondary">
                Book Repair
              </Link>
            </div>
            <div className="service-card">
              <h3>On-site Support</h3>
              <p>
                Home & office IT support for installation, troubleshooting, and maintenance services.
              </p>
              <Link to="/support" className="btn btn-secondary">
                Request Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Highlight */}
      <section className="section offers-section">
        <div className="container">
          <div className="section-header">
            <h2>Special Offers</h2>
            <p className="subtitle">Limited-time deals on HP products and services</p>
          </div>
          <div className="offer-card">
            <div className="offer-badge">🎉 New Year Sale</div>
            <h3>Up to 25% Off</h3>
            <p>
              Get up to 25% off on selected HP laptops and printers for a limited time. 
              Don't miss out on these amazing deals!
            </p>
            <Link to="/offers" className="btn btn-primary btn-lg">
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p className="subtitle">Trusted by hundreds of satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Got my HP laptop repaired quickly with genuine parts. The service was excellent and 
                the price was very reasonable. Highly recommended!"
              </p>
              <div className="testimonial-author">Rajesh Kumar</div>
              <div className="testimonial-location">Greater Noida</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Best place to buy HP laptops in Greater Noida. Great prices and amazing after-sales 
                support. The team is very knowledgeable and helpful."
              </p>
              <div className="testimonial-author">Priya Sharma</div>
              <div className="testimonial-location">Noida</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Professional on-site support for our office. They fixed our printer issue within hours. 
                Very reliable and efficient service!"
              </p>
              <div className="testimonial-author">Amit Singh</div>
              <div className="testimonial-location">Delhi NCR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta-section">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Get Started?</h2>
            <p className="subtitle">
              Contact us today for expert advice, genuine HP products, and reliable support for your devices.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-label">Phone</div>
              <div className="contact-detail-value">
                <a href="tel:+917500858389">+91 7500858389</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-label">Email</div>
              <div className="contact-detail-value">
                <a href="mailto:info@nexora-in.com">info@nexora-in.com</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-label">Location</div>
              <div className="contact-detail-value">Greater Noida</div>
            </div>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
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

export default HomePage;
