import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalAmount, totalItems } = useCart();

  if (items.length === 0) return (
    <div className="page-wrapper">
      <div className="container" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
        <p style={{ fontSize: '4rem', marginBottom: 16 }}>🛒</p>
        <h2 style={{ fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>Your cart is empty</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Discover amazing products on the marketplace</p>
        <Link to="/marketplace" className="btn-primary"><ShoppingBag size={18} /> Browse Marketplace</Link>
      </div>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <h1 className="section-title" style={{ marginBottom: 24 }}>Shopping Cart ({totalItems})</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="cart-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {items.map(item => (
              <div key={item.product.id} className="card-flat" style={{ display: 'flex', gap: 16, padding: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to={`/product/${item.product.id}`}>
                  <img src={item.product.images[0]} alt="" style={{ width: 80, height: 80, borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
                </Link>
                <div style={{ flex: 1, minWidth: 150 }}>
                  <Link to={`/product/${item.product.id}`} style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>{item.product.title}</Link>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Seller: {item.product.seller.name}</p>
                  <p style={{ fontWeight: 700, color: 'var(--color-primary-500)', marginTop: 4 }}>GHS {item.product.price.toLocaleString()}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="btn-secondary" style={{ padding: 6, width: 32, height: 32 }}><Minus size={14} /></button>
                  <span style={{ fontWeight: 600, width: 24, textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="btn-secondary" style={{ padding: 6, width: 32, height: 32 }}><Plus size={14} /></button>
                </div>
                <p style={{ fontWeight: 700, minWidth: 90, textAlign: 'right' }}>GHS {(item.product.price * item.quantity).toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.product.id)} className="btn-ghost" style={{ color: 'var(--color-error-500)', padding: 8 }}><Trash2 size={18} /></button>
              </div>
            ))}
          </div>

          <div className="card-flat" style={{ padding: 24, alignSelf: 'flex-start', position: 'sticky', top: 88 }}>
            <h3 style={{ fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-heading)' }}>Order Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Subtotal ({totalItems} items)</span>
                <span style={{ fontWeight: 600 }}>GHS {totalAmount.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Delivery Fee</span>
                <span style={{ fontWeight: 600, color: 'var(--color-success-500)' }}>Free</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Service Fee</span>
                <span style={{ fontWeight: 600 }}>GHS {Math.round(totalAmount * 0.02).toLocaleString()}</span>
              </div>
              <div style={{ borderTop: '1px solid var(--border-primary)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' }}>
                <span style={{ fontWeight: 700 }}>Total</span>
                <span style={{ fontWeight: 800, color: 'var(--color-primary-500)' }}>GHS {(totalAmount + Math.round(totalAmount * 0.02)).toLocaleString()}</span>
              </div>
            </div>
            <input placeholder="Promo code" className="input-field" style={{ marginBottom: 12 }} />
            <Link to="/checkout" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}>
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 1024px) { .cart-grid { grid-template-columns: 1fr 360px !important; } }`}</style>
    </div>
  );
}
