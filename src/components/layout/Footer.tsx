import { Link } from 'react-router-dom';
import { Heart, Mail, MessageCircle, Camera, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-primary)', padding: '48px 0 24px' }} className="footer-wrap">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginBottom: 32 }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-heading)' }}>
              <span className="gradient-text">MarketHub</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 16 }}>
              The social commerce platform where everyone can buy, sell, and discover amazing products and services.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[MessageCircle, Camera, Code, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 12, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Marketplace</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Browse All', 'Electronics', 'Fashion', 'Services', 'Vehicles'].map(item => (
                <Link key={item} to="/marketplace" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 12, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map(item => (
                <a key={item} href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 12, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Help Center', 'Safety Tips', 'Seller Guide', 'Terms of Service', 'Privacy Policy'].map(item => (
                <a key={item} href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-primary)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>© 2026 MarketHub. All rights reserved.</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            Made with <Heart size={12} color="var(--color-error-500)" fill="var(--color-error-500)" /> by Team Codex
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .footer-wrap { padding-bottom: 80px !important; } }
      `}</style>
    </footer>
  );
}
