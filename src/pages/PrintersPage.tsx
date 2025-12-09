import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const PrintersPage: React.FC = () => {
  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1>HP Printers & Supplies</h1>
            <p className="description">
              Complete range of HP printers for every need. From home photo printing to high-volume business
              printing, find the perfect HP printer with genuine supplies and expert support.
            </p>
            <div className="hero-features">
              <span className="hero-feature">Genuine HP Printers</span>
              <span className="hero-feature">Original Supplies</span>
              <span className="hero-feature">Expert Installation</span>
            </div>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary btn-lg">Explore Printers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose HP Printers from NEXORA?</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Authorized HP Printing Partner</h3>
              <ul>
                <li>Complete HP printer range</li>
                <li>Latest printer models</li>
                <li>Business & home solutions</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Genuine HP Supplies</h3>
              <ul>
                <li>Original HP ink cartridges</li>
                <li>Authentic toner cartridges</li>
                <li>Quality photo paper</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Expert Installation & Network Setup</h3>
              <ul>
                <li>Professional installation</li>
                <li>Network configuration</li>
                <li>Mobile printing setup</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Ongoing Maintenance & Support</h3>
              <ul>
                <li>Regular maintenance</li>
                <li>Troubleshooting support</li>
                <li>Genuine parts replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="series" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>HP Printer Series</h2>
          </div>
          <div className="series-grid">
            <div className="series-card">
              <div className="series-header">
                <h3>HP Inkjet Printers</h3>
                <p className="tagline">High-quality photo and document printing for home use</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Photo-quality printing</li>
                    <li>Wireless connectivity</li>
                    <li>Mobile printing</li>
                    <li>Affordable ink costs</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹8,000 – ₹25,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="series-card">
              <div className="series-header">
                <h3>HP LaserJet Printers</h3>
                <p className="tagline">Fast and efficient printing for business environments</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>High-speed printing</li>
                    <li>Professional quality</li>
                    <li>Network connectivity</li>
                    <li>Cost-effective toner</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹12,000 – ₹80,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="series-card">
              <div className="series-header">
                <h3>HP All-in-One Printers</h3>
                <p className="tagline">Print, scan, copy, and fax in one device</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Multi-function capability</li>
                    <li>Duplex printing</li>
                    <li>ADF scanning</li>
                    <li>Touchscreen display</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹10,000 – ₹50,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="series-card">
              <div className="series-header">
                <h3>HP Enterprise Printers</h3>
                <p className="tagline">Heavy-duty printers for large offices</p>
              </div>
              <div className="series-content">
                <div className="series-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>High volume printing</li>
                    <li>Advanced security</li>
                    <li>Fleet management</li>
                    <li>Enterprise support</li>
                  </ul>
                </div>
                <div className="series-price">
                  <div>
                    <div className="price-label">Starting From</div>
                    <div className="price-value">₹50,000 – ₹2,00,000</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Printer Services</h2>
            <p className="subtitle">Complete support for all your printing needs</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Printer Setup</h3>
              <ul>
                <li>Installation & configuration</li>
                <li>Network setup</li>
                <li>Driver installation</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Repair Services</h3>
              <ul>
                <li>Genuine HP parts</li>
                <li>Expert technicians</li>
                <li>Quick turnaround</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Ink & Toner</h3>
              <ul>
                <li>Original HP supplies</li>
                <li>Bulk discounts available</li>
                <li>Regular stock updates</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Technical Support</h3>
              <ul>
                <li>Troubleshooting assistance</li>
                <li>Software updates</li>
                <li>Ongoing maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>HP Printing Supplies</h2>
            <p className="subtitle">Complete range of genuine HP ink, toner, and paper</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Original HP Ink</h3>
              <p>Genuine HP ink cartridges for vibrant, long-lasting prints</p>
              <div className="price-value" style={{ marginBottom: 'var(--spacing-lg)' }}>Starting ₹500</div>
              <Link to="/contact" className="btn btn-primary">Order Supplies</Link>
            </div>
            <div className="card">
              <h3>HP LaserJet Toner</h3>
              <p>Authentic toner cartridges for professional quality documents</p>
              <div className="price-value" style={{ marginBottom: 'var(--spacing-lg)' }}>Starting ₹2,500</div>
              <Link to="/contact" className="btn btn-primary">Order Supplies</Link>
            </div>
            <div className="card">
              <h3>HP Photo Paper</h3>
              <p>Premium photo paper for professional-quality prints</p>
              <div className="price-value" style={{ marginBottom: 'var(--spacing-lg)' }}>Starting ₹300</div>
              <Link to="/contact" className="btn btn-primary">Order Supplies</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Need Help Choosing the Right Printer?</h2>
          <p className="subtitle">
            Our experts can help you find the perfect printer for your needs and budget.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-secondary btn-lg">Get Expert Advice</Link>
            <a href="https://wa.me/917500858389" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrintersPage;
