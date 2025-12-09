import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

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
                <Link to="/laptops" className="btn btn-primary btn-lg">
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
              [HP Laptop / Workspace Image]
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

      {/* Products Overview */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p className="subtitle">Latest HP technology for all your needs.</p>
          </div>
          <div className="grid grid-3">
            <div className="product-card">
              <h3>HP Laptops</h3>
              <p>
                Latest HP laptops with cutting-edge technology for students, professionals, and businesses.
              </p>
              <Link to="/laptops" className="btn btn-primary">
                Explore Laptops
              </Link>
            </div>
            <div className="product-card">
              <h3>HP Desktops</h3>
              <p>
                Powerful desktops for home, office, and professional use with reliable performance.
              </p>
              <Link to="/desktops" className="btn btn-primary">
                Explore Desktops
              </Link>
            </div>
            <div className="product-card">
              <h3>HP Printers</h3>
              <p>
                High-quality HP printers for home and business printing with genuine supplies available.
              </p>
              <Link to="/printers" className="btn btn-primary">
                Explore Printers
              </Link>
            </div>
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
