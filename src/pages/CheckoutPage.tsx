import React, { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { database } from '../config/firebase';
import { ref, push } from 'firebase/database';
import './CheckoutPage.css';

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  category: string;
}

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'cod' | 'online' | 'upi' | '';
  notes: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = (location.state?.cart || []) as CartItem[];
  const totalAmount = location.state?.total || 0;

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CheckoutFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      navigate('/store');
      return;
    }

    if (validate()) {
      setIsSubmitting(true);
      try {
        const ordersRef = ref(database, 'orders');
        const newOrder = {
          ...formData,
          items: cartItems,
          totalAmount,
          orderDate: Date.now(),
          status: 'pending',
          paymentStatus: formData.paymentMethod === 'cod' ? 'pending' : 'processing',
        };
        
        await push(ordersRef, newOrder);

        alert('Order placed successfully! We will contact you shortly to confirm your order.');
        navigate('/');
      } catch (error: any) {
        console.error('Error placing order:', error);
        let errorMessage = 'Failed to place order. ';
        if (error.code === 'PERMISSION_DENIED') {
          errorMessage += 'Database permission denied. Please contact support.';
        } else if (error.message) {
          errorMessage += error.message;
        } else {
          errorMessage += 'Please try again or call us at +91 7500858389.';
        }
        alert(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
              <h1>Your cart is empty</h1>
              <p style={{ marginBottom: 'var(--spacing-xl)' }}>Add some products to your cart to checkout.</p>
              <button onClick={() => navigate('/store')} className="btn btn-primary btn-lg">
                Continue Shopping
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <section className="section">
        <div className="container">
          <h1 style={{ marginBottom: 'var(--spacing-2xl)' }}>Checkout</h1>
          
          <div className="checkout-grid">
            {/* Order Summary */}
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="order-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="order-item">
                    <div>
                      <h4>{item.name}</h4>
                      <p className="item-quantity">Quantity: {item.quantity}</p>
                    </div>
                    <div className="item-price">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <strong>Total:</strong>
                <strong className="total-amount">₹{totalAmount.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Checkout Form */}
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Delivery Information</h2>
              
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

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email <span className="required">*</span></label>
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
                  <label className="form-label">Phone <span className="required">*</span></label>
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
                <label className="form-label">Address <span className="required">*</span></label>
                <textarea
                  name="address"
                  className={`form-textarea ${errors.address ? 'error' : ''}`}
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                />
                {errors.address && <div className="form-error">{errors.address}</div>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City <span className="required">*</span></label>
                  <input
                    type="text"
                    name="city"
                    className={`form-input ${errors.city ? 'error' : ''}`}
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <div className="form-error">{errors.city}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">State <span className="required">*</span></label>
                  <input
                    type="text"
                    name="state"
                    className={`form-input ${errors.state ? 'error' : ''}`}
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && <div className="form-error">{errors.state}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Pincode <span className="required">*</span></label>
                  <input
                    type="text"
                    name="pincode"
                    className={`form-input ${errors.pincode ? 'error' : ''}`}
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                  {errors.pincode && <div className="form-error">{errors.pincode}</div>}
                </div>
              </div>

              <h2 style={{ marginTop: 'var(--spacing-2xl)' }}>Payment Method</h2>
              
              <div className="payment-methods">
                <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <div className="payment-info">
                    <strong>💵 Cash on Delivery</strong>
                    <p>Pay when you receive the product</p>
                  </div>
                </label>

                <label className={`payment-option ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                  />
                  <div className="payment-info">
                    <strong>📱 UPI Payment</strong>
                    <p>Pay using Google Pay, PhonePe, Paytm</p>
                  </div>
                </label>

                <label className={`payment-option ${formData.paymentMethod === 'online' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleChange}
                  />
                  <div className="payment-info">
                    <strong>💳 Online Payment</strong>
                    <p>Pay using Credit/Debit Card or Net Banking</p>
                  </div>
                </label>
              </div>
              {errors.paymentMethod && <div className="form-error">{errors.paymentMethod}</div>}

              <div className="form-group" style={{ marginTop: 'var(--spacing-xl)' }}>
                <label className="form-label">Order Notes (Optional)</label>
                <textarea
                  name="notes"
                  className="form-textarea"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special instructions for your order..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: 'var(--spacing-xl)' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : '💳 Place Order'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
