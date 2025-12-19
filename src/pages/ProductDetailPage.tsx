import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { database } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';
import { Product } from '../types/product.types';
import './ProductDetailPage.css';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) {
      navigate('/store');
      return;
    }

    const productRef = ref(database, `products/${id}`);
    
    const unsubscribe = onValue(productRef, async (snapshot) => {
      const data = snapshot.val();
      
      if (data) {
        // Handle images
        let images: string[] = [];
        
        if (data.imageUrl) {
          images = [data.imageUrl];
        } else if (data.imageURL) {
          images = [data.imageURL];
        } else if (data.images && Array.isArray(data.images)) {
          images = data.images;
        } else if (data.imagePath) {
          try {
            const imageRef = storageRef(storage, data.imagePath);
            const url = await getDownloadURL(imageRef);
            images = [url];
          } catch (error) {
            console.error('Error loading image:', error);
          }
        }

        // Build features array
        let features: string[] = [];
        
        if (data.category === 'laptop') {
          features = [
            data.processor && `Processor: ${data.processor}${data.processorGen ? ' ' + data.processorGen : ''}`,
            data.ram && `RAM: ${data.ram}GB ${data.ramType || ''}`,
            data.storage && `Storage: ${data.storage}GB ${data.storageType || ''}`,
            data.displaySize && `Display: ${data.displaySize}" ${data.displayResolution || ''} ${data.displayType || ''}`,
            data.graphics && `Graphics: ${data.graphics}`,
            data.operatingSystem && `OS: Windows ${data.operatingSystem}`,
            data.condition && `Condition: ${data.condition}`,
          ].filter(Boolean) as string[];
        } else if (data.category === 'printer') {
          features = [
            data.printerType && `Type: ${data.printerType}`,
            data.colorType && `Color: ${data.colorType}`,
            data.printSpeed && `Speed: ${data.printSpeed} ppm`,
            data.resolution && `Resolution: ${data.resolution} dpi`,
            data.duplexPrinting && data.duplexPrinting !== 'none' && `Duplex: ${data.duplexPrinting}`,
            data.dutyCycle && `Duty Cycle: ${data.dutyCycle} pages/month`,
            data.condition && `Condition: ${data.condition}`,
          ].filter(Boolean) as string[];
        } else if (data.category === 'desktop') {
          features = [
            data.processor && `Processor: ${data.processor}${data.processorGen ? ' ' + data.processorGen : ''}`,
            data.ram && `RAM: ${data.ram}GB ${data.ramType || ''}`,
            data.storage && `Storage: ${data.storage}GB ${data.storageType || ''}`,
            data.graphics && `Graphics: ${data.graphics}`,
            data.operatingSystem && `OS: Windows ${data.operatingSystem}`,
            data.condition && `Condition: ${data.condition}`,
          ].filter(Boolean) as string[];
        }

        // Build specifications
        const specifications: Record<string, string> = {};
        
        if (data.category === 'laptop') {
          Object.assign(specifications, {
            'Processor': data.processor || '',
            'Processor Gen': data.processorGen || '',
            'RAM': data.ram ? `${data.ram}GB ${data.ramType || ''}` : '',
            'Storage': data.storage ? `${data.storage}GB ${data.storageType || ''}` : '',
            'Display': data.displaySize ? `${data.displaySize}" ${data.displayResolution || ''}` : '',
            'Graphics': data.graphics || '',
            'Graphics Type': data.graphicsType || '',
            'OS': data.operatingSystem ? `Windows ${data.operatingSystem}` : '',
            'Warranty': data.warranty ? `${data.warranty} (${data.warrantyType || ''})` : '',
          });
        } else if (data.category === 'printer') {
          Object.assign(specifications, {
            'Printer Type': data.printerType || '',
            'Color Type': data.colorType || '',
            'Print Speed': data.printSpeed ? `${data.printSpeed} ppm` : '',
            'Resolution': data.resolution || '',
            'Duplex Printing': data.duplexPrinting || 'None',
            'Duty Cycle': data.dutyCycle ? `${data.dutyCycle} pages/month` : '',
            'Warranty': data.warranty ? `${data.warranty} (${data.warrantyType || ''})` : '',
          });
        }

        const productData: Product = {
          id: id!,
          name: `${data.brand || ''} ${data.model || ''}`.trim() || 'Untitled Product',
          category: data.category || 'laptop',
          description: data.description || `Model: ${data.modelNumber || data.model || ''} | ${data.laptopCategory || data.printerType || data.category || ''}${data.condition ? ` | ${data.condition}` : ''}`,
          price: data.sellingPrice 
            ? `₹${data.sellingPrice.toLocaleString('en-IN')}` 
            : (data.mrp ? `₹${data.mrp.toLocaleString('en-IN')}` : 'Price on Request'),
          features,
          specifications: {
            ...specifications,
            'Brand': data.brand || '',
            'Model': data.model || '',
            'Model Number': data.modelNumber || '',
            'Condition': data.condition || 'New',
            'MRP': data.mrp ? `₹${data.mrp.toLocaleString('en-IN')}` : '',
            'Selling Price': data.sellingPrice ? `₹${data.sellingPrice.toLocaleString('en-IN')}` : '',
            'Discount': data.discountPercent ? `${Math.abs(data.discountPercent).toFixed(1)}%` : '',
          },
          images,
          stock: data.stock || 0,
          visible: data.isActive !== false,
          createdAt: data.createdAt || Date.now(),
          updatedAt: data.updatedAt || Date.now(),
        };

        setProduct(productData);
      } else {
        navigate('/store');
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching product:', error);
      navigate('/store');
    });

    return () => unsubscribe();
  }, [id, navigate]);

  const addToCart = () => {
    if (!product) return;
    
    // Get existing cart from localStorage
    const existingCart = localStorage.getItem('nexora_cart');
    let cart = existingCart ? JSON.parse(existingCart) : [];
    
    // Check if product already in cart
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('nexora_cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  const buyNow = () => {
    if (!product) return;
    
    navigate('/checkout', {
      state: {
        cart: [{ ...product, quantity }],
        total: parseInt(product.price.replace(/[₹,]/g, '')) * quantity
      }
    });
  };

  if (loading) {
    return (
      <main className="product-detail-page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Loading product...</div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <main className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/store">Store</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail-grid">
          {/* Image Gallery */}
          <div className="product-images">
            <div className="main-image">
              {product.images && product.images.length > 0 ? (
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="image-placeholder">📦</div>';
                  }}
                />
              ) : (
                <div className="image-placeholder">
                  {product.category === 'laptop' ? '💻' : product.category === 'printer' ? '🖨️' : '🖥️'}
                </div>
              )}
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-gallery">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-category-badge">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
            
            <h1 className="product-title">{product.name}</h1>
            
            {product.specifications?.Condition && product.specifications.Condition.toLowerCase() !== 'new' && (
              <span className="condition-badge">
                {product.specifications.Condition}
              </span>
            )}

            <div className="product-pricing">
              <div className="current-price">{product.price}</div>
              {product.specifications?.MRP && product.specifications.MRP !== product.price && (
                <div className="original-price">{product.specifications.MRP}</div>
              )}
              {product.specifications?.Discount && parseFloat(product.specifications.Discount) > 0 && (
                <div className="discount-badge">
                  Save {product.specifications.Discount}
                </div>
              )}
            </div>

            <div className="stock-status">
              {product.stock && product.stock > 0 ? (
                <span className="in-stock">✓ In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">✗ Out of Stock</span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="quantity"
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  max={product.stock || 999}
                />
                <button 
                  onClick={() => setQuantity(Math.min(product.stock || 999, quantity + 1))}
                  disabled={quantity >= (product.stock || 999)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button 
                className="btn btn-primary btn-lg"
                onClick={addToCart}
                disabled={!product.stock || product.stock === 0}
              >
                🛒 Add to Cart
              </button>
              <button 
                className="btn btn-secondary btn-lg"
                onClick={buyNow}
                disabled={!product.stock || product.stock === 0}
              >
                ⚡ Buy Now
              </button>
            </div>

            {/* Contact for Quote */}
            <div className="contact-section">
              <p>Need help or have questions?</p>
              <div className="contact-buttons">
                <Link to="/contact" className="btn btn-outline">Get Quote</Link>
                <a href="tel:+917500858389" className="btn btn-outline">📞 Call Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        {product.features && product.features.length > 0 && (
          <div className="product-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {product.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && (
          <div className="product-section">
            <h2>Technical Specifications</h2>
            <div className="specifications-table">
              {Object.entries(product.specifications)
                .filter(([_, value]) => value && value !== '')
                .map(([key, value]) => (
                  <div key={key} className="spec-row">
                    <div className="spec-label">{key}</div>
                    <div className="spec-value">{value}</div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="product-section trust-section">
          <h2>Why Buy from NEXORA?</h2>
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-icon">🏅</div>
              <h3>Authorized HP Partner</h3>
              <p>100% Genuine Products</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">🛡️</div>
              <h3>Warranty Included</h3>
              <p>Full Manufacturer Warranty</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick Delivery in NCR</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">🛠️</div>
              <h3>After-Sales Support</h3>
              <p>Complete Service & Repair</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
