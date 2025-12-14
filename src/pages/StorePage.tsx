import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { database, storage } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import { Product } from '../types/product.types';
import './ProductsPage.css';
import './StorePage.css';

type Category = 'all' | 'laptop' | 'desktop' | 'printer';
type ConditionFilter = 'all' | 'new' | 'second-hand';

interface CartItem extends Product {
  quantity: number;
}

const StorePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [conditionFilter, setConditionFilter] = useState<ConditionFilter>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[₹,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Fetch products from Firebase
  useEffect(() => {
    const productsRef = ref(database, 'products');
    
    const unsubscribe = onValue(productsRef, async (snapshot) => {
      const data = snapshot.val();
      console.log('Firebase products data:', data); // Debug log
      
      if (data) {
        const productsArray: Product[] = await Promise.all(
          Object.keys(data).map(async (key) => {
            const item = data[key];
            
            // Handle images from Firebase
            let images: string[] = [];
            
            // Check if imageUrl or imageURL field exists (direct URL)
            if (item.imageUrl) {
              images = [item.imageUrl];
            } else if (item.imageURL) {
              images = [item.imageURL];
            } else if (item.images && Array.isArray(item.images)) {
              // If images is an array of URLs
              images = item.images;
            } else if (item.imagePath) {
              // If imagePath references Firebase Storage
              try {
                const imageRef = storageRef(storage, item.imagePath);
                const url = await getDownloadURL(imageRef);
                images = [url];
              } catch (error) {
                console.error('Error loading image from storage:', error);
              }
            }
            
            // Build features array based on category
            let features: string[] = [];
            
            if (item.category === 'laptop') {
              features = [
                item.processor && `Processor: ${item.processor}${item.processorGen ? ' ' + item.processorGen : ''}`,
                item.ram && `RAM: ${item.ram}GB ${item.ramType || ''}`,
                item.storage && `Storage: ${item.storage}GB ${item.storageType || ''}`,
                item.displaySize && `Display: ${item.displaySize}" ${item.displayResolution || ''} ${item.displayType || ''}`,
                item.graphics && `Graphics: ${item.graphics}`,
                item.operatingSystem && `OS: Windows ${item.operatingSystem}`,
                item.condition && `Condition: ${item.condition}`,
              ].filter(Boolean) as string[];
            } else if (item.category === 'printer') {
              features = [
                item.printerType && `Type: ${item.printerType}`,
                item.colorType && `Color: ${item.colorType}`,
                item.printSpeed && `Speed: ${item.printSpeed} ppm`,
                item.resolution && `Resolution: ${item.resolution} dpi`,
                item.duplexPrinting && item.duplexPrinting !== 'none' && `Duplex: ${item.duplexPrinting}`,
                item.dutyCycle && `Duty Cycle: ${item.dutyCycle} pages/month`,
                item.condition && `Condition: ${item.condition}`,
              ].filter(Boolean) as string[];
            } else if (item.category === 'desktop') {
              features = [
                item.processor && `Processor: ${item.processor}${item.processorGen ? ' ' + item.processorGen : ''}`,
                item.ram && `RAM: ${item.ram}GB ${item.ramType || ''}`,
                item.storage && `Storage: ${item.storage}GB ${item.storageType || ''}`,
                item.graphics && `Graphics: ${item.graphics}`,
                item.operatingSystem && `OS: Windows ${item.operatingSystem}`,
                item.condition && `Condition: ${item.condition}`,
              ].filter(Boolean) as string[];
            }
            
            // Build specifications object
            const specifications: Record<string, string> = {};
            
            if (item.category === 'laptop') {
              Object.assign(specifications, {
                'Processor': item.processor || '',
                'Processor Gen': item.processorGen || '',
                'RAM': item.ram ? `${item.ram}GB ${item.ramType || ''}` : '',
                'Storage': item.storage ? `${item.storage}GB ${item.storageType || ''}` : '',
                'Display': item.displaySize ? `${item.displaySize}" ${item.displayResolution || ''}` : '',
                'Graphics': item.graphics || '',
                'Graphics Type': item.graphicsType || '',
                'OS': item.operatingSystem ? `Windows ${item.operatingSystem}` : '',
                'Warranty': item.warranty ? `${item.warranty} (${item.warrantyType || ''})` : '',
              });
            } else if (item.category === 'printer') {
              Object.assign(specifications, {
                'Printer Type': item.printerType || '',
                'Color Type': item.colorType || '',
                'Print Speed': item.printSpeed ? `${item.printSpeed} ppm` : '',
                'Resolution': item.resolution || '',
                'Duplex Printing': item.duplexPrinting || 'None',
                'Duty Cycle': item.dutyCycle ? `${item.dutyCycle} pages/month` : '',
                'Warranty': item.warranty ? `${item.warranty} (${item.warrantyType || ''})` : '',
              });
            }
            
            // Transform Firebase data to match Product interface
            return {
              id: key,
              name: `${item.brand || ''} ${item.model || ''}`.trim() || 'Untitled Product',
              category: item.category || 'laptop',
              description: `Model: ${item.modelNumber || item.model || ''} | ${item.laptopCategory || item.printerType || item.category || ''}${item.condition ? ` | ${item.condition}` : ''}`,
              price: item.sellingPrice 
                ? `₹${item.sellingPrice.toLocaleString('en-IN')}` 
                : (item.mrp ? `₹${item.mrp.toLocaleString('en-IN')}` : 'Price on Request'),
              features,
              specifications: {
                ...specifications,
                'Model Number': item.modelNumber || '',
                'Condition': item.condition || 'New',
                'MRP': item.mrp ? `₹${item.mrp.toLocaleString('en-IN')}` : '',
                'Selling Price': item.sellingPrice ? `₹${item.sellingPrice.toLocaleString('en-IN')}` : '',
                'Discount': item.discountPercent ? `${Math.abs(item.discountPercent).toFixed(1)}%` : '',
              },
              images,
              stock: item.stock || 0,
              visible: item.isActive !== false,
              createdAt: item.createdAt || Date.now(),
              updatedAt: item.updatedAt || Date.now(),
            };
          })
        );
        
        const filteredProducts = productsArray.filter((product: Product) => product.visible !== false); // Show all products unless explicitly hidden
        
        console.log('Filtered products:', filteredProducts); // Debug log
        setProducts(filteredProducts);
      } else {
        console.log('No products found in Firebase database');
        setProducts([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching products:', error);
      console.error('Error code:', (error as any).code);
      console.error('Error message:', error.message);
      setProducts([]);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getFilteredProducts = () => {
    let filtered = products;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    // Filter by condition
    if (conditionFilter !== 'all') {
      filtered = filtered.filter(p => {
        const condition = p.specifications?.Condition?.toLowerCase() || 'new';
        return conditionFilter === 'second-hand' 
          ? condition.includes('second') || condition.includes('used') || condition.includes('refurbished')
          : condition === 'new' || !condition.includes('second');
      });
    }
    
    const categoryTitles = {
      laptop: 'Laptops',
      desktop: 'Desktops',
      printer: 'Printers',
    };
    
    return {
      title: activeCategory === 'all' ? 'All Products' : categoryTitles[activeCategory] || 'Products',
      products: filtered
    };
  };

  const filteredData = getFilteredProducts();

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      laptop: 'Laptop',
      desktop: 'Desktop',
      printer: 'Printer',
    };
    return labels[category] || category;
  };

  return (
    <main className="products-page">
      {/* Floating Cart Button */}
      <button
        onClick={() => setShowCart(!showCart)}
        style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {getTotalItems() > 0 && (
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {showCart && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'min(400px, 100vw)',
          height: '100vh',
          backgroundColor: 'white',
          boxShadow: '-4px 0 12px rgba(0,0,0,0.2)',
          zIndex: 1001,
          overflowY: 'auto',
          padding: 'var(--spacing-xl)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ margin: 0 }}>Shopping Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--color-gray-600)', padding: 'var(--spacing-2xl)' }}>
              Your cart is empty
            </p>
          ) : (
            <>
              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                {cart.map(item => (
                  <div key={item.id} style={{
                    padding: 'var(--spacing-md)',
                    borderBottom: '1px solid var(--color-gray-200)',
                    marginBottom: 'var(--spacing-md)',
                  }}>
                    <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>{item.name}</h4>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>
                      {item.price}
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          padding: '4px 12px',
                          border: '1px solid var(--color-gray-300)',
                          background: 'white',
                          cursor: 'pointer',
                          borderRadius: 'var(--border-radius-sm)',
                        }}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          padding: '4px 12px',
                          border: '1px solid var(--color-gray-300)',
                          background: 'white',
                          cursor: 'pointer',
                          borderRadius: 'var(--border-radius-sm)',
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          marginLeft: 'auto',
                          padding: '4px 12px',
                          border: 'none',
                          background: 'var(--color-error)',
                          color: 'white',
                          cursor: 'pointer',
                          borderRadius: 'var(--border-radius-sm)',
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                borderTop: '2px solid var(--color-gray-300)',
                paddingTop: 'var(--spacing-lg)',
                marginTop: 'var(--spacing-lg)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                  <strong>Total Items:</strong>
                  <span>{getTotalItems()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)' }}>
                  <strong style={{ fontSize: 'var(--font-size-lg)' }}>Total Price:</strong>
                  <span style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    ₹{getTotalPrice().toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  onClick={() => {
                    navigate('/checkout', {
                      state: {
                        cart: cart,
                        total: getTotalPrice()
                      }
                    });
                    setShowCart(false);
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%', display: 'block', textAlign: 'center' }}
                >
                  💳 Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Overlay */}
      {showCart && (
        <div
          onClick={() => setShowCart(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
          }}
        />
      )}

      <section className="products-hero">
        <div className="container">
          <h1>HP Products Store</h1>
          <p className="description">
            Browse our complete range of HP laptops, desktops, and printers. 
            All genuine HP products with full warranty and support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--spacing-lg)' }}>
            <div className="category-filters">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Products
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'laptop' ? 'active' : ''}`}
                onClick={() => setActiveCategory('laptop')}
              >
                Laptops
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'desktop' ? 'active' : ''}`}
                onClick={() => setActiveCategory('desktop')}
              >
                Desktops
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'printer' ? 'active' : ''}`}
                onClick={() => setActiveCategory('printer')}
              >
                Printers
              </button>
            </div>

            <div style={{ marginLeft: 'auto' }}>
              <label htmlFor="condition-filter" style={{ marginRight: 'var(--spacing-sm)', fontWeight: 600, color: 'var(--color-gray-700)' }}>
                Condition:
              </label>
              <select
                id="condition-filter"
                value={conditionFilter}
                onChange={(e) => setConditionFilter(e.target.value as ConditionFilter)}
                style={{
                  padding: '0.5rem 1rem',
                  border: '2px solid var(--color-primary)',
                  borderRadius: 'var(--border-radius-md)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  minWidth: '180px',
                }}
              >
                <option value="all">All Conditions</option>
                <option value="new">New Only</option>
                <option value="second-hand">Second-Hand Only</option>
              </select>
            </div>
          </div>

          <h2 style={{ marginTop: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-xl)' }}>
            {filteredData.title}
            {!loading && <span style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray-600)', marginLeft: 'var(--spacing-md)' }}>
              ({filteredData.products.length} {filteredData.products.length === 1 ? 'product' : 'products'})
            </span>}
          </h2>

          {loading ? (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
              <div style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>Loading products...</div>
            </div>
          ) : filteredData.products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
              <div style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-gray-600)' }}>No products found</div>
            </div>
          ) : (
            <div className="grid grid-2">
              {filteredData.products.map((product) => (
                <div key={product.id} className="card">
                  {activeCategory === 'all' && (
                    <span className="badge" style={{ marginBottom: 'var(--spacing-sm)' }}>
                      {getCategoryLabel(product.category)}
                    </span>
                  )}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'white',
                    borderRadius: 'var(--border-radius-md)',
                    marginBottom: 'var(--spacing-md)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<div style="color: var(--color-gray-400); font-size: 3rem;">📦</div>';
                        }}
                      />
                    ) : (
                      <div style={{ color: 'var(--color-gray-400)', fontSize: '3rem' }}>
                        {product.category === 'laptop' ? '💻' : product.category === 'printer' ? '🖨️' : '🖥️'}
                      </div>
                    )}
                  </div>
                  <h3>{product.name}</h3>
                  {product.specifications?.Condition && product.specifications.Condition.toLowerCase() !== 'new' && (
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: '#f59e0b', 
                        color: 'white',
                        marginBottom: 'var(--spacing-sm)',
                        display: 'inline-block'
                      }}
                    >
                      {product.specifications.Condition}
                    </span>
                  )}
                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <p className="price" style={{ marginBottom: '0.25rem' }}>{product.price}</p>
                    {product.specifications?.MRP && product.specifications.MRP !== product.price && (
                      <p style={{ 
                        fontSize: 'var(--font-size-sm)', 
                        color: 'var(--color-gray-500)',
                        textDecoration: 'line-through',
                        marginBottom: '0.25rem'
                      }}>
                        MRP: {product.specifications.MRP}
                      </p>
                    )}
                    {product.specifications?.Discount && parseFloat(product.specifications.Discount) > 0 && (
                      <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                        {product.specifications.Discount} OFF
                      </span>
                    )}
                  </div>
                  <p style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                    {product.description}
                  </p>
                  {product.stock !== undefined && (
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                      <span className={`badge ${product.stock > 0 ? 'badge-success' : 'badge-error'}`}>
                        {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                      </span>
                    </div>
                  )}
                  {product.features && product.features.length > 0 && (
                    <ul className="feature-list">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn btn-primary"
                      disabled={product.stock === 0}
                      style={{ flex: '1 1 auto' }}
                    >
                      🛒 Add to Cart
                    </button>
                    <Link to="/contact" className="btn btn-secondary" style={{ flex: '1 1 auto' }}>Get Quote</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Buy from NEXORA?</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>🏅 Authorized HP Partner</h3>
              <p>Official HP partner ensuring genuine products with full manufacturer warranty.</p>
            </div>
            <div className="card">
              <h3>💰 Best Prices</h3>
              <p>Competitive pricing with regular offers and bulk purchase discounts available.</p>
            </div>
            <div className="card">
              <h3>🚚 Fast Delivery</h3>
              <p>Quick delivery across Greater Noida and NCR region with installation support.</p>
            </div>
            <div className="card">
              <h3>🛠️ After-Sales Support</h3>
              <p>Complete after-sales service including repairs, HP Care plans, and on-site support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Need Help Choosing?</h2>
          <p className="subtitle">
            Our experts are here to help you find the perfect HP product for your needs.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
            <a href="tel:+917500858389" className="btn btn-secondary btn-lg">Call: +91 7500858389</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StorePage;
