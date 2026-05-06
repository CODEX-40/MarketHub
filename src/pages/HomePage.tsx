import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, TrendingUp, Sparkles, Star, ChevronRight, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockProducts } from '../data/mockProducts';
import { categories } from '../data/categories';
import { mockUsers } from '../data/mockUsers';
import ProductCard from '../components/ui/ProductCard';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/marketplace?search=${search}`);
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '60px 0 80px',
        background: 'var(--gradient-hero)', minHeight: 480,
        display: 'flex', alignItems: 'center',
      }}>
        {/* Decorative shapes */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'white', top: -100, right: -100 }} />
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'white', bottom: -80, left: -80 }} />
          <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'white', top: '40%', left: '60%' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '6px 16px', borderRadius: 'var(--radius-full)', color: 'white', fontSize: '0.8rem', fontWeight: 600, marginBottom: 20 }}>
              <Sparkles size={14} /> Your Social Commerce Hub
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: 'white', marginBottom: 16, lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>
              Buy, Sell & Discover<br />Amazing Products
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', marginBottom: 32, lineHeight: 1.6, maxWidth: 540, margin: '0 auto 32px' }}>
              Join thousands of sellers and buyers on Ghana's fastest-growing marketplace. Shop products, hire services, and watch video ads — all in one place.
            </p>
          </motion.div>

          <motion.form onSubmit={handleSearch} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ display: 'flex', maxWidth: 560, margin: '0 auto', background: 'white', borderRadius: 'var(--radius-full)', padding: 6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              <input type="text" placeholder="Search for anything..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 44px', border: 'none', background: 'transparent', fontSize: '0.95rem', color: '#0F172A', outline: 'none' }} />
            </div>
            <button type="submit" style={{ padding: '12px 28px', background: 'var(--gradient-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
              Search <ArrowRight size={16} />
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
            {[
              { icon: Shield, text: 'Verified Sellers' },
              { icon: Truck, text: 'Fast Delivery' },
              { icon: HeadphonesIcon, text: '24/7 Support' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', fontWeight: 500 }}>
                <item.icon size={16} /> {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div>
              <h2 className="section-title">Browse Categories</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>Find exactly what you're looking for</p>
            </div>
            <Link to="/marketplace" className="btn-ghost hide-mobile" style={{ gap: 4 }}>
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/marketplace?category=${cat.id}`} className="card" style={{ overflow: 'hidden', textDecoration: 'none', display: 'block', position: 'relative' }}>
                  <div style={{ paddingTop: '65%', position: 'relative', overflow: 'hidden' }}>
                    <img src={cat.image} alt={cat.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                    <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span>
                        <div>
                          <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{cat.name}</p>
                          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>{cat.count.toLocaleString()} listings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section style={{ padding: '48px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div>
              <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <TrendingUp size={24} color="var(--color-primary-500)" /> Trending Now
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>Most popular items this week</p>
            </div>
            <Link to="/marketplace" className="btn-primary" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>
              See All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="product-grid">
            {mockProducts.slice(0, 8).map(product => (
              <motion.div key={product.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sellers */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <h2 className="section-title">Top Sellers</h2>
          <p className="section-subtitle">Trusted sellers with the best ratings</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {mockUsers.slice(0, 4).map((seller, i) => (
              <motion.div key={seller.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/profile/${seller.id}`} className="card" style={{ padding: 20, textDecoration: 'none', textAlign: 'center' }}>
                  <img src={seller.avatar} alt={seller.name} style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto 12px', background: 'var(--bg-tertiary)' }} />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    {seller.name}
                    {seller.isVerified && <span style={{ color: 'var(--color-primary-500)' }}>✓</span>}
                  </h3>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', marginBottom: 8 }}>{seller.location}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 4, alignItems: 'center', marginBottom: 8 }}>
                    <Star size={14} color="#EAB308" fill="#EAB308" />
                    <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{seller.rating}</span>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>({seller.reviewCount})</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{seller.totalSales} sales • {seller.followers} followers</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div style={{
            background: 'var(--gradient-primary)', borderRadius: 'var(--radius-xl)', padding: 'clamp(32px, 5vw, 56px)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
              <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'white', top: -100, right: -50 }} />
              <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'white', bottom: -50, left: -30 }} />
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>
                Start Selling Today
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>
                Turn your products and skills into income. Create your store for free and reach thousands of buyers.
              </p>
              <Link to="/dashboard" className="btn-secondary" style={{ background: 'white', color: 'var(--color-primary-600)', border: 'none', padding: '14px 32px', fontSize: '0.95rem', fontWeight: 700 }}>
                Create Your Store <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hide-mobile { display: none; }
        @media (min-width: 768px) { .hide-mobile { display: inline-flex !important; } }
      `}</style>
    </div>
  );
}
