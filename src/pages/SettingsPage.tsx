import { Link } from 'react-router-dom';
import { ChevronLeft, Moon, Sun, Bell, Shield, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page-wrapper">
      <div className="container" style={{ maxWidth: 560, paddingTop: 24, paddingBottom: 48 }}>
        <Link to="/" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: '0.875rem' }}>
          <ChevronLeft size={18} /> Back
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.75rem', marginBottom: 8 }}>Settings</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 32 }}>Manage appearance and preferences for this demo.</p>

        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 20px', border: 'none', background: 'transparent', cursor: 'pointer',
              borderBottom: '1px solid var(--border-primary)', color: 'var(--text-primary)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 600, fontSize: '0.9rem' }}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              Appearance
            </span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{theme === 'light' ? 'Light' : 'Dark'}</span>
          </button>
          <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, opacity: 0.7 }}>
            <Bell size={20} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Notifications</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Demo only</span>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--border-primary)', opacity: 0.7 }}>
            <Shield size={20} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Privacy &amp; security</span>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--border-primary)', opacity: 0.7 }}>
            <Globe size={20} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Language &amp; region</span>
          </div>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
          MarketHub is a front-end demo. Account, payments, and notifications are not connected to a live backend.
        </p>
      </div>
    </div>
  );
}
