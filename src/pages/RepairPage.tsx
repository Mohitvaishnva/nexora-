import React, { useState, FormEvent } from 'react';
import './RepairPage.css';
import './ServicesPage.css';

interface RepairFormData {
  // Personal Information
  fullName: string;
  phone: string;
  email: string;
  address: string;
  
  // Device Information
  deviceType: string;
  brand: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  warrantyStatus: string;
  
  // Service Preferences
  issueDescription: string;
  urgency: string;
  serviceType: string;
  preferredDate: string;
}

const RepairPage: React.FC = () => {
  const [formData, setFormData] = useState<RepairFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    deviceType: '',
    brand: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
    warrantyStatus: '',
    issueDescription: '',
    urgency: '',
    serviceType: '',
    preferredDate: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RepairFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof RepairFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RepairFormData, string>> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.deviceType) newErrors.deviceType = 'Device type is required';
    if (!formData.issueDescription.trim()) newErrors.issueDescription = 'Issue description is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Repair request submitted successfully! We will contact you shortly.');
      // Here you would typically send data to a server
      console.log('Form data:', formData);
    }
  };

  return (
    <main className="repair-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Laptop & Computer Repair</h1>
            <p className="description">
              Professional repair services with genuine HP parts and expert technicians. Quick turnaround times
              with comprehensive warranty on all repairs.
            </p>
            <div className="hero-cta-group">
              <a href="#repair-form" className="btn btn-primary btn-lg">Book a Repair</a>
              <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Repair Services</h2>
          </div>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-icon">🔧</div>
              <h3>Hardware Repair</h3>
              <ul>
                <li>Screen replacement</li>
                <li>Keyboard & touchpad repair</li>
                <li>Battery replacement</li>
                <li>Motherboard repair</li>
                <li>Hard drive/SSD upgrade</li>
                <li>RAM upgrade</li>
              </ul>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">💻</div>
              <h3>Software Solutions</h3>
              <ul>
                <li>Operating system installation</li>
                <li>Virus & malware removal</li>
                <li>Data recovery</li>
                <li>Software troubleshooting</li>
                <li>Driver updates</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <div className="service-feature-card">
              <div className="service-icon">⚡</div>
              <h3>Quick Diagnostics</h3>
              <ul>
                <li>Free initial diagnosis</li>
                <li>Detailed repair estimate</li>
                <li>No hidden charges</li>
                <li>Transparent pricing</li>
                <li>Expert recommendations</li>
                <li>Quick turnaround time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="repair-form" className="section form-section">
        <div className="container">
          <div className="section-header">
            <h2>Book a Repair</h2>
            <p className="subtitle">Fill out the form and we'll get back to you with a quote</p>
          </div>
          
          <form className="repair-form" onSubmit={handleSubmit}>
            <div className="form-section-title">Personal Information</div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-input"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-section-title">Device Information</div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Device Type <span className="required">*</span></label>
                <select
                  name="deviceType"
                  className={`form-select ${errors.deviceType ? 'error' : ''}`}
                  value={formData.deviceType}
                  onChange={handleChange}
                >
                  <option value="">Select device type</option>
                  <option value="laptop">Laptop</option>
                  <option value="desktop">Desktop</option>
                  <option value="printer">Printer</option>
                  <option value="other">Other</option>
                </select>
                {errors.deviceType && <div className="form-error">{errors.deviceType}</div>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  name="brand"
                  className="form-input"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g., HP"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Model</label>
                <input
                  type="text"
                  name="model"
                  className="form-input"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="e.g., HP Pavilion 15"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Serial Number</label>
                <input
                  type="text"
                  name="serialNumber"
                  className="form-input"
                  value={formData.serialNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Purchase Date</label>
                <input
                  type="date"
                  name="purchaseDate"
                  className="form-input"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Warranty Status</label>
                <select
                  name="warrantyStatus"
                  className="form-select"
                  value={formData.warrantyStatus}
                  onChange={handleChange}
                >
                  <option value="">Select status</option>
                  <option value="under-warranty">Under Warranty</option>
                  <option value="expired">Warranty Expired</option>
                  <option value="unknown">Not Sure</option>
                </select>
              </div>
            </div>

            <div className="form-section-title">Service Preferences</div>
            
            <div className="form-group">
              <label className="form-label">Issue Description <span className="required">*</span></label>
              <textarea
                name="issueDescription"
                className={`form-textarea ${errors.issueDescription ? 'error' : ''}`}
                value={formData.issueDescription}
                onChange={handleChange}
                placeholder="Please describe the issue with your device..."
              />
              {errors.issueDescription && <div className="form-error">{errors.issueDescription}</div>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Urgency</label>
                <select
                  name="urgency"
                  className="form-select"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">Select urgency</option>
                  <option value="urgent">Urgent (1-2 days)</option>
                  <option value="normal">Normal (3-5 days)</option>
                  <option value="flexible">Flexible (5+ days)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Service Type <span className="required">*</span></label>
                <select
                  name="serviceType"
                  className={`form-select ${errors.serviceType ? 'error' : ''}`}
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="">Select service type</option>
                  <option value="in-store">In-Store Repair</option>
                  <option value="pickup">Pickup & Delivery</option>
                  <option value="on-site">On-Site Repair</option>
                </select>
                {errors.serviceType && <div className="form-error">{errors.serviceType}</div>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                className="form-input"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--spacing-lg)' }}>
              Submit Repair Request
            </button>
          </form>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Repair Process</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Book Service</h3>
              <p>Submit repair request online or call us</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Free Diagnosis</h3>
              <p>Our experts diagnose the issue</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Expert Repair</h3>
              <p>We repair using genuine parts</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Quality Testing</h3>
              <p>Thorough testing before delivery</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RepairPage;
