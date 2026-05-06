import { Link } from 'react-router-dom';
import { Heart, MapPin, Star, Eye } from 'lucide-react';
import type { Product } from '../../types';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  return (
    <Link to={`/product/${product.id}`} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
      {/* Image */}
      <div style={{ position: 'relative', paddingTop: '100%', background: 'var(--bg-tertiary)' }}>
        <img src={product.images[0]} alt={product.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy" />
        {discount > 0 && (
          <span style={{ position: 'absolute', top: 8, left: 8, background: 'var(--color-error-500)', color: 'white', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontSize: '0.7rem', fontWeight: 700 }}>
            -{discount}%
          </span>
        )}
        <button onClick={e => { e.preventDefault(); setLiked(!liked); }}
          style={{ position: 'absolute', top: 8, right: 8, width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-glass)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', transition: 'all var(--transition-fast)' }}>
          <Heart size={16} color={liked ? '#EF4444' : 'var(--text-secondary)'} fill={liked ? '#EF4444' : 'none'} />
        </button>
        <div style={{ position: 'absolute', bottom: 8, left: 8, display: 'flex', gap: 4 }}>
          <span className="badge" style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(8px)', color: 'white', fontSize: '0.65rem' }}>
            <Eye size={10} /> {product.views}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 'auto' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-500)' }}>
            GHS {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>
              GHS {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <img src={product.seller.avatar} alt="" style={{ width: 18, height: 18, borderRadius: '50%' }} />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{product.seller.name.split(' ')[0]}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Star size={12} color="#EAB308" fill="#EAB308" />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{product.rating}</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-tertiary)', fontSize: '0.65rem' }}>
          <MapPin size={10} /> {product.location}
        </div>
      </div>
    </Link>
  );
}
