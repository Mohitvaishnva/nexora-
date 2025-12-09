import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About NEXORA Tech Services</h1>
          <p className="tagline">
            Where Innovation Meets Technology – Your trusted HP authorized partner in Greater Noida,
            delivering excellence in technology solutions.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
          </div>
          <div className="story-content">
            <p>
              NEXORA Tech Services was founded with a vision to bring cutting-edge HP technology closer
              to the people of Greater Noida and nearby areas. As an authorized HP partner, we have built
              our reputation on trust, quality, and exceptional customer service.
            </p>
            <p>
              Located at Shop No.39, Ch. Bashir Ali Market, Near Pari Chowk, we have become the go-to
              destination for individuals and businesses seeking reliable HP products and expert technical
              support. Our commitment to excellence has made us a preferred choice in the region.
            </p>
            <p>
              With years of experience in the technology industry, our team of certified technicians
              brings deep expertise and personalized attention to every customer interaction. Whether
              you're looking to purchase a new laptop, repair an existing device, or need on-site
              technical support, we provide professional solutions tailored to your needs.
            </p>
            <p>
              We take pride in being more than just a store – we're your technology partner, dedicated
              to helping you make informed decisions and keeping your devices running at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To empower individuals and businesses with reliable HP technology solutions, exceptional
                service, and ongoing support that drives productivity and innovation in the digital age.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred HP technology partner in the region, known for our
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="subtitle">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust & Reliability</h3>
              <p>
                Building lasting relationships through honest business practices and dependable service.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality Excellence</h3>
              <p>
                Delivering only genuine HP products and services that meet the highest standards.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">👤</div>
              <h3>Customer First</h3>
              <p>
                Putting your needs at the center of everything we do with personalized attention.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Quick Service</h3>
              <p>
                Providing fast, efficient solutions without compromising on quality or thoroughness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NEXORA */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose NEXORA?</h2>
            <p className="subtitle">Your trusted technology partner in Greater Noida and Delhi NCR</p>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Authorized HP Partner</strong> with access to genuine products and official support
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Expert Technicians</strong> with years of experience and HP certifications
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Comprehensive Warranty</strong> on all products and services provided
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>On-site Support</strong> for home and office installations and repairs
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Competitive Prices</strong> with flexible payment options available
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Quick Repair Turnaround</strong> to minimize your downtime
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Extensive HP Inventory</strong> including latest models and configurations
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <strong>Dedicated Support Team</strong> available for post-purchase assistance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Store */}
      <section className="section">
        <div className="container">
          <div className="visit-store-card">
            <h3>Visit Our Store</h3>
            <div className="store-info-grid">
              <div className="store-info-item">
                <div className="store-info-label">Address</div>
                <div className="store-info-value">
                  Shop No.39, Ch. Bashir Ali Market<br />
                  Near Pari Chowk, Haldauna Tugalpur<br />
                  Greater Noida
                </div>
              </div>
              <div className="store-info-item">
                <div className="store-info-label">Phone</div>
                <div className="store-info-value">
                  <a href="tel:+917500858389">+91 7500858389</a>
                </div>
              </div>
              <div className="store-info-item">
                <div className="store-info-label">Email</div>
                <div className="store-info-value">
                  <a href="mailto:info@nexora-in.com">info@nexora-in.com</a>
                </div>
              </div>
              <div className="store-info-item">
                <div className="store-info-label">Hours</div>
                <div className="store-info-value">
                  Mon – Sun: 10:00 AM – 8:00 PM
                </div>
              </div>
            </div>
            <div className="store-buttons">
              <a href="tel:+917500858389" className="btn btn-secondary btn-lg">
                Call Us
              </a>
              <a
                href="https://maps.google.com/?q=Shop+No.39+Ch.+Bashir+Ali+Market+Near+Pari+Chowk+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HP Authorized Partner */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="hp-partner-card">
            <div className="text-center">
              <span className="hp-partner-badge">HP Authorized Partner</span>
              <h3>Benefits of Being an HP Authorized Partner</h3>
            </div>
            <div className="partner-benefits">
              <div className="partner-benefit">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <strong>100% Genuine HP Products</strong> with full manufacturer warranty and authenticity guarantee
                </div>
              </div>
              <div className="partner-benefit">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <strong>Access to Latest HP Technology</strong> including new releases and exclusive models
                </div>
              </div>
              <div className="partner-benefit">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <strong>Certified Technicians</strong> trained by HP with access to genuine parts
                </div>
              </div>
              <div className="partner-benefit">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <strong>Direct HP Support</strong> for complex technical issues and warranty claims
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Experience the NEXORA Difference?</h2>
          <p className="text-lg text-muted mb-xl">
            Visit us today or get in touch to learn more about our products and services.
          </p>
          <div className="flex-center gap-md">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
            <Link to="/laptops" className="btn btn-secondary btn-lg">
              Shop Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
