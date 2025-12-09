import React, { useState, FormEvent } from 'react';
import './RepairPage.css';

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent successfully! We will get back to you soon.');
      console.log('Form data:', formData);
      setFormData({ fullName: '', phone: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <main className="repair-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Contact NEXORA Tech Services</h1>
            <p className="description">
              Get in touch for HP product enquiries, repair requests, HP Care plans, or on-site support.
              Our team is ready to help.
            </p>
            <div className="hero-cta-group">
              <a href="tel:+917500858389" className="btn btn-primary btn-lg">Call Now</a>
              <a href="https://wa.me/917500858389" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Details</h2>
          </div>
          <div className="grid grid-2" style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <div className="card">
              <h3>Visit Our Store</h3>
              <p style={{ marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                <strong style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Address</strong>
                Shop No.39, Ch. Bashir Ali Market<br />
                Near Pari Chowk, Haldauna Tugalpur<br />
                Greater Noida
              </p>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                Located near Pari Chowk, easily accessible from across Greater Noida.
              </p>
            </div>

            <div className="card">
              <h3>Get in Touch</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <div>
                  <strong style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Phone</strong>
                  <a href="tel:+917500858389" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>
                    +91 7500858389
                  </a>
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Email</strong>
                  <a href="mailto:info@nexora-in.com" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>
                    info@nexora-in.com
                  </a>
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Working Hours</strong>
                  <span style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray-700)' }}>
                    Mon – Sun: 10:00 AM – 8:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section form-section">
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p className="subtitle">Fill out the form and we'll get back to you shortly</p>
          </div>
          
          <form className="repair-form" onSubmit={handleSubmit}>
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
              <label className="form-label">Subject <span className="required">*</span></label>
              <select
                name="subject"
                className={`form-select ${errors.subject ? 'error' : ''}`}
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a subject</option>
                <option value="product-enquiry">Product Enquiry</option>
                <option value="repair-request">Repair Request</option>
                <option value="hp-care">HP Care Plans</option>
                <option value="on-site-support">On-site Support</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Message <span className="required">*</span></label>
              <textarea
                name="message"
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
              />
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Visit Us</h2>
          </div>
          <div className="card" style={{ padding: 'var(--spacing-3xl)', textAlign: 'center', backgroundColor: 'var(--color-gray-200)' }}>
            <div style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-gray-600)' }}>
              Map / Directions placeholder – integrate map here
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Prefer to Talk Directly?</h2>
          <p className="subtitle">
            We're here to help! Call us or chat with us on WhatsApp for immediate assistance.
          </p>
          <div className="hero-cta-group">
            <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call: +91 7500858389</a>
            <a href="https://wa.me/917500858389" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
