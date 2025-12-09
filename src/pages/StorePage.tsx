import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { Product } from '../types/product.types';
import './ProductsPage.css';
import './StorePage.css';

type Category = 'all' | 'laptop' | 'desktop' | 'printer';

const StorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Firebase
  useEffect(() => {
    const productsRef = ref(database, 'products');
    
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray: Product[] = Object.keys(data)
          .map(key => ({
            id: key,
            ...data[key]
          }))
          .filter((product: Product) => product.visible);
        
        setProducts(productsArray);
      } else {
        // Fallback to default products if Firebase is empty
        setProducts(getDefaultProducts());
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching products:', error);
      // Fallback to default products on error
      setProducts(getDefaultProducts());
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Default products (fallback)
  const getDefaultProducts = (): Product[] => {
      const laptops: Product[] = [
    {
      id: 'default-1',
      name: 'HP Pavilion Series',
      category: 'laptop',
      description: 'Perfect for everyday computing, entertainment, and light work',
      price: '₹40,000 – ₹70,000',
      features: ['Intel Core i5/i7', '8GB-16GB RAM', '512GB SSD', 'Full HD Display'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-2',
      name: 'HP Envy Series',
      category: 'laptop',
      description: 'Premium design with powerful performance for creators',
      price: '₹70,000 – ₹1,20,000',
      features: ['Intel Core i7', '16GB RAM', '512GB-1TB SSD', '4K Display Option'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-3',
      name: 'HP EliteBook Series',
      category: 'laptop',
      description: 'Business-class laptops with enterprise-grade security',
      price: '₹80,000 – ₹1,50,000',
      features: ['Intel Core i5/i7/i9', 'Up to 32GB RAM', 'Military-grade Durability', 'TPM Security'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-4',
      name: 'HP Gaming (Omen/Victus)',
      category: 'laptop',
      description: 'High-performance gaming laptops for enthusiasts',
      price: '₹60,000 – ₹1,80,000',
      features: ['Intel/AMD Processors', 'NVIDIA RTX Graphics', 'High Refresh Rate', 'Advanced Cooling'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  const desktops: Product[] = [
    {
      id: 'default-5',
      name: 'HP All-in-One PCs',
      category: 'desktop',
      description: 'Space-saving design with powerful performance',
      price: '₹35,000 – ₹80,000',
      features: ['Intel Core i3/i5/i7', '8GB-16GB RAM', 'Touchscreen Options', 'Built-in Speakers'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-6',
      name: 'HP Elite Desktops',
      category: 'desktop',
      description: 'Professional desktops for business environments',
      price: '₹50,000 – ₹1,20,000',
      features: ['Intel Core i5/i7/i9', 'Up to 64GB RAM', 'Enterprise Security', 'Expandable Storage'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-7',
      name: 'HP Pavilion Desktops',
      category: 'desktop',
      description: 'Reliable performance for home and office use',
      price: '₹30,000 – ₹70,000',
      features: ['Intel Core Processors', '8GB-16GB RAM', 'Multiple Connectivity', 'Compact Design'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-8',
      name: 'HP Workstations',
      category: 'desktop',
      description: 'Professional-grade power for demanding workloads',
      price: '₹80,000 – ₹3,00,000',
      features: ['Xeon Processors', 'Up to 128GB RAM', 'Professional Graphics', 'ISV Certified'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  const printers: Product[] = [
    {
      id: 'default-9',
      name: 'HP Inkjet Printers',
      category: 'printer',
      description: 'Affordable color printing for home and small office',
      price: '₹8,000 – ₹25,000',
      features: ['Color & B/W Printing', 'Wireless Connectivity', 'Mobile Printing', 'Compact Design'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-10',
      name: 'HP LaserJet Series',
      category: 'printer',
      description: 'Fast, reliable black-and-white and color laser printing',
      price: '₹12,000 – ₹80,000',
      features: ['High-speed Printing', 'Large Paper Capacity', 'Network Ready', 'Low Cost per Page'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-11',
      name: 'HP All-in-One Printers',
      category: 'printer',
      description: 'Print, scan, copy, and fax in one device',
      price: '₹10,000 – ₹50,000',
      features: ['Multi-function', 'Auto Document Feeder', 'Duplex Printing', 'Touchscreen Display'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 'default-12',
      name: 'HP Enterprise Printers',
      category: 'printer',
      description: 'High-volume printing for large organizations',
      price: '₹50,000 – ₹2,00,000',
      features: ['High Volume Output', 'Advanced Security', 'Fleet Management', 'Enterprise Support'],
      visible: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

    return [...laptops, ...desktops, ...printers];
  };

  const getFilteredProducts = () => {
    if (activeCategory === 'all') {
      return { title: 'All Products', products: products };
    }
    
    const filtered = products.filter(p => p.category === activeCategory);
    const categoryTitles = {
      laptop: 'Laptops',
      desktop: 'Desktops',
      printer: 'Printers',
    };
    
    return {
      title: categoryTitles[activeCategory] || 'Products',
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
                  {product.images && product.images.length > 0 && (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      style={{ 
                        width: '100%', 
                        height: '200px', 
                        objectFit: 'cover', 
                        borderRadius: 'var(--border-radius-md)',
                        marginBottom: 'var(--spacing-md)'
                      }}
                    />
                  )}
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <p style={{ marginBottom: 'var(--spacing-lg)' }}>{product.description}</p>
                  {product.stock !== undefined && (
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                      <span className={`badge ${product.stock > 0 ? 'badge-success' : 'badge-error'}`}>
                        {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                      </span>
                    </div>
                  )}
                  <ul className="feature-list">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <Link to="/contact" className="btn btn-primary">Get Quote</Link>
                    <a href="tel:+917500858389" className="btn btn-secondary">Call Now</a>
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
