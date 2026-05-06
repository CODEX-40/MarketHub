import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, MapPin, Star, Shield, MessageCircle, ShoppingCart, ChevronLeft, Eye } from 'lucide-react';
import { useState } from 'react';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const related = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <Link to="/marketplace" className="btn-ghost" style={{ marginBottom: 16, color: 'var(--text-secondary)' }}>
          <ChevronLeft size={18} /> Back to Marketplace
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="product-detail-grid">
          {/* Images */}
          <div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg-tertiary)', marginBottom: 12, position: 'relative', paddingTop: '80%' }}>
              <img src={product.images[selectedImage]} alt={product.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: 8 }}>
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)} style={{
                    width: 72, height: 72, borderRadius: 'var(--radius-md)', overflow: 'hidden', border: i === selectedImage ? '2px solid var(--color-primary-500)' : '2px solid transparent',
                    cursor: 'pointer', background: 'none', padding: 0
                  }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <span className="badge badge-primary">{product.category}</span>
              <span className="badge badge-success">{product.condition}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>{product.title}</h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Star size={16} color="#EAB308" fill="#EAB308" />
                <span style={{ fontWeight: 600 }}>{product.rating}</span>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>({product.reviewCount} reviews)</span>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-tertiary)', fontSize: '0.85rem' }}><Eye size={14} /> {product.views} views</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-tertiary)', fontSize: '0.85rem' }}><MapPin size={14} /> {product.location}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-500)' }}>GHS {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>GHS {product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24, fontSize: '0.925rem' }}>{product.description}</p>

            {/* Specs */}
            {product.specifications && (
              <div className="card-flat" style={{ padding: 16, marginBottom: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, fontSize: '0.9rem' }}>Specifications</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px 16px' }}>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border-secondary)' }}>
                      <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{key}</span>
                      <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ flex: 1, minWidth: 160, padding: '14px 24px', fontSize: '0.95rem' }} onClick={() => addToCart(product)}>
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button className="btn-accent" style={{ flex: 1, minWidth: 160, padding: '14px 24px', fontSize: '0.95rem' }}>
                Buy Now
              </button>
              <button className="btn-secondary" onClick={() => setLiked(!liked)} style={{ padding: '14px' }}>
                <Heart size={18} fill={liked ? '#EF4444' : 'none'} color={liked ? '#EF4444' : undefined} />
              </button>
              <button className="btn-secondary" style={{ padding: '14px' }}>
                <Share2 size={18} />
              </button>
            </div>

            {/* Seller Card */}
            <div className="card-flat" style={{ padding: 16 }}>
              <Link to={`/profile/${product.seller.id}`} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 12 }}>
                <img src={product.seller.avatar} alt="" style={{ width: 48, height: 48, borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    {product.seller.name}
                    {product.seller.isVerified && <Shield size={14} color="var(--color-primary-500)" />}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>⭐ {product.seller.rating} ({product.seller.reviewCount})</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{product.seller.totalSales} sales</span>
                  </div>
                </div>
              </Link>
              <div style={{ display: 'flex', gap: 8 }}>
                <Link to="/messages" className="btn-secondary" style={{ flex: 1, fontSize: '0.8rem' }}>
                  <MessageCircle size={16} /> Chat with Seller
                </Link>
                <Link to={`/profile/${product.seller.id}`} className="btn-ghost" style={{ fontSize: '0.8rem' }}>View Profile</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2 className="section-title">Related Products</h2>
            <div className="product-grid">{related.map(p => <ProductCard key={p.id} product={p} />)}</div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) { .product-detail-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </div>
  );
}
