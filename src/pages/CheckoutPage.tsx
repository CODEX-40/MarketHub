import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Smartphone, Building, Check, ArrowLeft, ArrowRight, MapPin, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [payMethod, setPayMethod] = useState('momo');
  const [orderConfirmId] = useState(() => String(Math.floor(100000 + Math.random() * 900000)));
  const serviceFee = Math.round(totalAmount * 0.02);
  const total = totalAmount + serviceFee;

  if (step === 4) return (
    <div className="page-wrapper">
      <div className="container" style={{ textAlign: 'center', paddingTop: 60, paddingBottom: 60, maxWidth: 500 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Check size={40} color="var(--color-success-500)" />
        </div>
        <h2 style={{ fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>Order Confirmed!</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>Your order #ORD-{orderConfirmId} has been placed successfully.</p>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginBottom: 32 }}>You will receive a confirmation email shortly.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Link to="/marketplace" className="btn-primary">Continue Shopping</Link>
          <Link to="/dashboard/orders" className="btn-secondary">View Orders</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 24, paddingBottom: 48, maxWidth: 800 }}>
        <Link to="/cart" className="btn-ghost" style={{ marginBottom: 16 }}><ArrowLeft size={16} /> Back to Cart</Link>
        <h1 className="section-title" style={{ marginBottom: 24 }}>Checkout</h1>

        {/* Progress */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
          {['Shipping', 'Payment', 'Review'].map((s, i) => (
            <div key={s} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: 4, borderRadius: 2, background: i + 1 <= step ? 'var(--gradient-primary)' : 'var(--bg-tertiary)', marginBottom: 8, transition: 'all 0.3s' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: i + 1 <= step ? 600 : 400, color: i + 1 <= step ? 'var(--color-primary-500)' : 'var(--text-tertiary)' }}>{s}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="checkout-grid">
          <div>
            {step === 1 && (
              <div className="card-flat" style={{ padding: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><MapPin size={18} /> Shipping Address</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <input placeholder="First Name" className="input-field" defaultValue="Kwame" />
                  <input placeholder="Last Name" className="input-field" defaultValue="Asante" />
                  <input placeholder="Phone Number" className="input-field" defaultValue="+233 24 123 4567" style={{ gridColumn: 'span 2' }} />
                  <input placeholder="Address" className="input-field" defaultValue="123 Independence Ave" style={{ gridColumn: 'span 2' }} />
                  <input placeholder="City" className="input-field" defaultValue="Accra" />
                  <input placeholder="Region" className="input-field" defaultValue="Greater Accra" />
                </div>
                <button onClick={() => setStep(2)} className="btn-primary" style={{ marginTop: 20, width: '100%', padding: 14 }}>Continue to Payment <ArrowRight size={16} /></button>
              </div>
            )}

            {step === 2 && (
              <div className="card-flat" style={{ padding: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><CreditCard size={18} /> Payment Method</h3>
                {[
                  { id: 'momo', label: 'Mobile Money (MTN/Vodafone/AirtelTigo)', icon: Smartphone, desc: 'Pay with your mobile wallet' },
                  { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard' },
                  { id: 'bank', label: 'Bank Transfer', icon: Building, desc: 'Direct bank transfer' },
                ].map(method => (
                  <div key={method.id} onClick={() => setPayMethod(method.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderRadius: 'var(--radius-md)', border: `2px solid ${payMethod === method.id ? 'var(--color-primary-500)' : 'var(--border-primary)'}`, marginBottom: 8, cursor: 'pointer', transition: 'all var(--transition-fast)', background: payMethod === method.id ? 'var(--color-primary-50, rgba(99,102,241,0.05))' : 'transparent' }}>
                    <method.icon size={20} color={payMethod === method.id ? 'var(--color-primary-500)' : 'var(--text-tertiary)'} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{method.label}</p>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>{method.desc}</p>
                    </div>
                    {payMethod === method.id && <Check size={18} color="var(--color-primary-500)" />}
                  </div>
                ))}
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  <button onClick={() => setStep(1)} className="btn-secondary" style={{ padding: 14 }}><ArrowLeft size={16} /></button>
                  <button onClick={() => setStep(3)} className="btn-primary" style={{ flex: 1, padding: 14 }}>Review Order <ArrowRight size={16} /></button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card-flat" style={{ padding: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><Shield size={18} /> Review Order</h3>
                {items.map(item => (
                  <div key={item.product.id} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border-secondary)', alignItems: 'center' }}>
                    <img src={item.product.images[0]} alt="" style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{item.product.title}</p>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Qty: {item.quantity}</p>
                    </div>
                    <p style={{ fontWeight: 700 }}>GHS {(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                  <button onClick={() => setStep(2)} className="btn-secondary" style={{ padding: 14 }}><ArrowLeft size={16} /></button>
                  <button onClick={() => { setStep(4); clearCart(); }} className="btn-accent" style={{ flex: 1, padding: 14, fontSize: '0.95rem' }}>
                    Place Order — GHS {total.toLocaleString()}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary sidebar */}
          <div className="card-flat" style={{ padding: 20, alignSelf: 'flex-start', position: 'sticky', top: 88 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 12, fontSize: '0.9rem' }}>Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-secondary)' }}>Subtotal</span><span>GHS {totalAmount.toLocaleString()}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-secondary)' }}>Delivery</span><span style={{ color: 'var(--color-success-500)' }}>Free</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-secondary)' }}>Service Fee</span><span>GHS {serviceFee.toLocaleString()}</span></div>
              <div style={{ borderTop: '1px solid var(--border-primary)', paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1rem' }}>
                <span>Total</span><span style={{ color: 'var(--color-primary-500)' }}>GHS {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 768px) { .checkout-grid { grid-template-columns: 1fr 280px !important; } }`}</style>
    </div>
  );
}
