import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, ShoppingCart, Menu, X, Sun, Moon, User, ChevronDown, LogOut, Settings, LayoutDashboard, Shield } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, mode, setMode, logout, login } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/ads', label: 'Ad Centre' },
    { path: '/messages', label: 'Messages' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/marketplace?search=${search}`);
  };

  return (
    <nav className="glass-strong" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: '1px solid var(--border-primary)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 16 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <img src={logo} alt="MarketHub" style={{ height: 36, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', display: 'none' }} className="md-show">MarketHub</span>
        </Link>

        {/* Search - hidden on mobile */}
        <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: 480, display: 'none' }} className="md-show-flex">
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input
              type="text" placeholder="Search products, services, sellers..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="input-field" style={{ paddingLeft: 40, borderRadius: 'var(--radius-full)' }}
            />
          </div>
        </form>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none', gap: 4 }} className="lg-show-flex">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="btn-ghost"
              style={{ color: location.pathname === link.path ? 'var(--color-primary-500)' : undefined, fontWeight: location.pathname === link.path ? 600 : 500 }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          {/* Mode Toggle */}
          <div style={{ display: 'none', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 'var(--radius-full)', background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', fontSize: '0.75rem', fontWeight: 600 }} className="lg-show-flex">
            <button onClick={() => setMode('buyer')} style={{ padding: '4px 10px', borderRadius: 'var(--radius-full)', background: mode === 'buyer' ? 'var(--gradient-primary)' : 'transparent', color: mode === 'buyer' ? 'white' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, transition: 'all var(--transition-fast)' }}>Buyer</button>
            <button onClick={() => setMode('seller')} style={{ padding: '4px 10px', borderRadius: 'var(--radius-full)', background: mode === 'seller' ? 'var(--gradient-accent)' : 'transparent', color: mode === 'seller' ? 'white' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, transition: 'all var(--transition-fast)' }}>Seller</button>
          </div>

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="btn-ghost" style={{ padding: 8, borderRadius: 'var(--radius-full)' }}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Notifications */}
          <button className="btn-ghost" style={{ padding: 8, borderRadius: 'var(--radius-full)', position: 'relative' }}>
            <Bell size={20} />
            <span className="notification-dot" />
          </button>

          {/* Cart */}
          <Link to="/cart" className="btn-ghost" style={{ padding: 8, borderRadius: 'var(--radius-full)', position: 'relative' }}>
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span style={{ position: 'absolute', top: -4, right: -4, background: 'var(--gradient-accent)', color: 'white', borderRadius: 'var(--radius-full)', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700 }}>
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile dropdown */}
          <div style={{ position: 'relative' }}>
            {user ? (
            <button onClick={() => setShowProfile(!showProfile)}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px', borderRadius: 'var(--radius-full)', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <img src={user.avatar} alt="" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-tertiary)' }} />
              <ChevronDown size={14} style={{ color: 'var(--text-secondary)', display: 'none' }} className="md-show" />
            </button>
            ) : (
            <button type="button" onClick={() => login()} className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.8rem', fontWeight: 600 }}>
              Sign in
            </button>
            )}

            {user && showProfile && (
              <div className="card animate-scale-in" style={{ position: 'absolute', right: 0, top: '100%', marginTop: 8, width: 240, padding: 8, zIndex: 100 }}
                onClick={() => setShowProfile(false)}>
                <div style={{ padding: '12px 12px 8px', borderBottom: '1px solid var(--border-primary)', marginBottom: 4 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{user.name}</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>@{user.username}</p>
                </div>
                <Link to={`/profile/${user.id}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'background var(--transition-fast)' }} className="hover-bg"><User size={16} /> My Profile</Link>
                <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)', fontSize: '0.875rem' }} className="hover-bg"><LayoutDashboard size={16} /> Seller Dashboard</Link>
                <Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)', fontSize: '0.875rem' }} className="hover-bg"><Shield size={16} /> Admin Panel</Link>
                <Link to="/settings" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)', fontSize: '0.875rem' }} className="hover-bg"><Settings size={16} /> Settings</Link>
                <div style={{ borderTop: '1px solid var(--border-primary)', marginTop: 4, paddingTop: 4 }}>
                  <button type="button" onClick={() => { logout(); setShowProfile(false); }} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--color-error-500)', fontSize: '0.875rem', width: '100%', background: 'transparent', border: 'none', cursor: 'pointer' }}><LogOut size={16} /> Sign Out</button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setShowMenu(!showMenu)} className="btn-ghost lg-hide" style={{ padding: 8 }}>
            {showMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="animate-slide-down lg-hide" style={{ borderTop: '1px solid var(--border-primary)', padding: 16, background: 'var(--bg-primary)' }}>
          <form onSubmit={handleSearch} style={{ marginBottom: 12 }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
              <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="input-field" style={{ paddingLeft: 40 }} />
            </div>
          </form>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} onClick={() => setShowMenu(false)} className="btn-ghost"
                style={{ justifyContent: 'flex-start', color: location.pathname === link.path ? 'var(--color-primary-500)' : undefined }}>
                {link.label}
              </Link>
            ))}
            {!user && (
              <button type="button" onClick={() => { login(); setShowMenu(false); }} className="btn-primary" style={{ justifyContent: 'center', marginBottom: 8 }}>Sign in</button>
            )}
            <Link to="/dashboard" onClick={() => setShowMenu(false)} className="btn-ghost" style={{ justifyContent: 'flex-start' }}>Seller Dashboard</Link>
            <Link to="/admin" onClick={() => setShowMenu(false)} className="btn-ghost" style={{ justifyContent: 'flex-start' }}>Admin Panel</Link>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 12, padding: '8px 0' }}>
            <button onClick={() => setMode('buyer')} style={{ flex: 1, padding: '8px 12px', borderRadius: 'var(--radius-md)', background: mode === 'buyer' ? 'var(--gradient-primary)' : 'var(--bg-tertiary)', color: mode === 'buyer' ? 'white' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>Buyer Mode</button>
            <button onClick={() => setMode('seller')} style={{ flex: 1, padding: '8px 12px', borderRadius: 'var(--radius-md)', background: mode === 'seller' ? 'var(--gradient-accent)' : 'var(--bg-tertiary)', color: mode === 'seller' ? 'white' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>Seller Mode</button>
          </div>
        </div>
      )}

      <style>{`
        .md-show { display: none !important; }
        .md-show-flex { display: none !important; }
        .lg-show-flex { display: none !important; }
        .lg-hide { display: inline-flex !important; }
        .hover-bg:hover { background: var(--bg-secondary); }
        @media (min-width: 768px) { .md-show { display: inline !important; } .md-show-flex { display: flex !important; } }
        @media (min-width: 1024px) { .lg-show-flex { display: flex !important; } .lg-hide { display: none !important; } }
      `}</style>
    </nav>
  );
}
