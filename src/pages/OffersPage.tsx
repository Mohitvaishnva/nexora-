import React from 'react';
import { Link } from 'react-router-dom';
import './OffersPage.css';

const OffersPage: React.FC = () => {
  return (
    <main className="offers-page">
      <section className="offers-hero">
        <div className="container">
          <h1>Special Offers & Deals</h1>
          <p className="description">
            Discover limited-time offers and exclusive deals on HP laptops, desktops, printers, and services at NEXORA Tech Services.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-lg" style={{ marginTop: 'var(--spacing-lg)' }}>
            Contact for Best Price
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Current Offers</h2>
            <p className="subtitle">Limited-time deals you don't want to miss</p>
          </div>
          
          <div className="grid grid-2" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div className="offer-card-featured">
              <div className="offer-emoji">🎉</div>
              <h3>New Year Laptop Sale</h3>
              <div className="offer-discount">Up to 25% Off</div>
              <p>
                Get up to 25% off on selected HP Pavilion and Envy laptops. Limited stock available.
                Valid until stocks last!
              </p>
              <Link to="/laptops" className="btn btn-primary btn-lg">Shop Laptops</Link>
            </div>

            <div className="offer-card-featured">
              <div className="offer-emoji">🖨️</div>
              <h3>Printer + Toner Combo</h3>
              <div className="offer-discount">Save ₹3,000</div>
              <p>
                Buy any HP LaserJet printer and get genuine toner cartridges at special bundled prices.
                Perfect for home and office use.
              </p>
              <Link to="/printers" className="btn btn-primary btn-lg">Shop Printers</Link>
            </div>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>HP Care + Device Bundle</h3>
              <p>
                Purchase any new HP laptop or desktop and get discounted HP Care plans. Protect your
                investment from day one with extended warranty coverage.
              </p>
              <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-primary)', margin: 'var(--spacing-lg) 0' }}>
                Save up to 30%
              </div>
              <Link to="/hp-care" className="btn btn-secondary">Learn More</Link>
            </div>

            <div className="card">
              <h3>Business Bulk Offers</h3>
              <p>
                Special pricing available for bulk orders of laptops, desktops, and printers for offices
                and educational institutions. Contact us for custom quotes.
              </p>
              <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-primary)', margin: 'var(--spacing-lg) 0' }}>
                Volume Discounts
              </div>
              <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Offer Categories</h2>
            <p className="subtitle">Explore deals across all our products and services</p>
          </div>
          <div className="offer-categories">
            <div className="category-card">
              <h3>💻 Laptop Offers</h3>
              <p>
                Special discounts on HP Pavilion, Envy, EliteBook, and Gaming series laptops. 
                Student discounts available on select models.
              </p>
              <Link to="/laptops" className="btn btn-primary">View Laptops</Link>
            </div>

            <div className="category-card">
              <h3>🖥️ Desktop Offers</h3>
              <p>
                Exclusive deals on HP All-in-One PCs, Elite Series, and Workstations.
                Free setup and installation included.
              </p>
              <Link to="/desktops" className="btn btn-primary">View Desktops</Link>
            </div>

            <div className="category-card">
              <h3>🖨️ Printer Offers</h3>
              <p>
                Bundle deals on HP Inkjet, LaserJet, and All-in-One printers with genuine supplies.
                Save on multi-unit purchases.
              </p>
              <Link to="/printers" className="btn btn-primary">View Printers</Link>
            </div>

            <div className="category-card">
              <h3>🛡️ HP Care Offers</h3>
              <p>
                Get discounted HP Care plans when purchased with new devices.
                Extended warranty starting from just ₹2,999.
              </p>
              <Link to="/hp-care" className="btn btn-primary">View Plans</Link>
            </div>

            <div className="category-card">
              <h3>🔧 Repair & Support Packages</h3>
              <p>
                Special pricing on repair services and on-site support packages.
                Save 15% on annual maintenance contracts.
              </p>
              <Link to="/repair" className="btn btn-primary">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Want a Custom Offer?</h2>
          <p className="subtitle">
            Share your requirements and we'll create a tailored offer for your home or business needs.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-secondary btn-lg">Share Requirements</Link>
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

export default OffersPage;
