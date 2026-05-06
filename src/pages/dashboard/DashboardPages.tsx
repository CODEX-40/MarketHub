import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, PlusCircle, ShoppingCart, BarChart3, Wallet, TrendingUp, DollarSign, Eye, ArrowUpRight, ArrowDownRight, Edit, Trash2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { mockProducts } from '../../data/mockProducts';
import { mockOrders } from '../../data/mockMessages';

const sidebarLinks = [
  { path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { path: '/dashboard/listings', label: 'My Listings', icon: Package },
  { path: '/dashboard/orders', label: 'Orders', icon: ShoppingCart },
  { path: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/dashboard/wallet', label: 'Wallet', icon: Wallet },
];

function DashSidebar() {
  const location = useLocation();
  return (
    <div style={{ width: 240, flexShrink: 0, borderRight: '1px solid var(--border-primary)', padding: '16px 0', display: 'none' }} className="dash-sidebar">
      <h2 style={{ padding: '0 20px 16px', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>Seller Dashboard</h2>
      {sidebarLinks.map(link => (
        <Link key={link.path} to={link.path} style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px', fontSize: '0.85rem', fontWeight: 500,
          color: location.pathname === link.path ? 'var(--color-primary-500)' : 'var(--text-secondary)',
          background: location.pathname === link.path ? 'var(--bg-secondary)' : 'transparent',
          borderRight: location.pathname === link.path ? '3px solid var(--color-primary-500)' : '3px solid transparent',
          transition: 'all var(--transition-fast)',
        }}>
          <link.icon size={18} /> {link.label}
        </Link>
      ))}
      <style>{`@media (min-width: 1024px) { .dash-sidebar { display: block !important; } }`}</style>
    </div>
  );
}

function MobileTabs() {
  const location = useLocation();
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: 4, padding: '12px 0', borderBottom: '1px solid var(--border-primary)', marginBottom: 20 }} className="dash-mobile-tabs">
      {sidebarLinks.map(link => (
        <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'btn-primary' : 'btn-ghost'}
          style={{ fontSize: '0.75rem', padding: '6px 14px', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <link.icon size={14} /> {link.label}
        </Link>
      ))}
      <style>{`@media (min-width: 1024px) { .dash-mobile-tabs { display: none !important; } }`}</style>
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon, color }: { title: string; value: string; change: number; icon: LucideIcon; color: string }) {
  const isUp = change >= 0;
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={20} color={color} />
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '0.75rem', fontWeight: 600, color: isUp ? 'var(--color-success-500)' : 'var(--color-error-500)' }}>
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {Math.abs(change)}%
        </span>
      </div>
      <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 2 }}>{value}</p>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>{title}</p>
    </div>
  );
}

export function DashboardOverview() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <DashSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <MobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Dashboard Overview</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
          <StatCard title="Total Revenue" value="GHS 45,230" change={12.5} icon={DollarSign} color="#6366F1" />
          <StatCard title="Total Orders" value="156" change={8.2} icon={ShoppingCart} color="#F97316" />
          <StatCard title="Total Views" value="12,450" change={-3.1} icon={Eye} color="#22C55E" />
          <StatCard title="Conversion Rate" value="3.2%" change={1.8} icon={TrendingUp} color="#8B5CF6" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {/* Chart placeholder */}
          <div className="card-flat" style={{ padding: 20 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 16, fontSize: '0.9rem' }}>Revenue Trend</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 160 }}>
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--gradient-primary)', borderRadius: '4px 4px 0 0', opacity: 0.6 + (i * 0.03), transition: 'height 0.3s' }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map(m => (
                <span key={m} style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card-flat" style={{ padding: 20 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 16, fontSize: '0.9rem' }}>Recent Orders</h3>
            {mockOrders.slice(0, 4).map(order => (
              <div key={order.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border-secondary)' }}>
                <img src={order.product.images[0]} alt="" style={{ width: 36, height: 36, borderRadius: 6, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.8rem' }}>{order.id}</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>{order.product.title.slice(0, 25)}...</p>
                </div>
                <span className={`badge badge-${order.status === 'delivered' ? 'success' : order.status === 'shipped' ? 'primary' : order.status === 'pending' ? 'warning' : 'error'}`} style={{ fontSize: '0.65rem' }}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyListings() {
  const myProducts = mockProducts.filter(p => p.seller.id === 'u1' || p.seller.id === 'u7').slice(0, 6);
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <DashSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <MobileTabs />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>My Listings</h1>
          <button className="btn-primary"><PlusCircle size={16} /> Add New Listing</button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead><tr><th>Product</th><th>Price</th><th>Views</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {myProducts.map(p => (
                <tr key={p.id}>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src={p.images[0]} alt="" style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{p.title.slice(0, 30)}</span>
                  </div></td>
                  <td style={{ fontWeight: 600 }}>GHS {p.price.toLocaleString()}</td>
                  <td>{p.views.toLocaleString()}</td>
                  <td><span className="badge badge-success">Active</span></td>
                  <td><div style={{ display: 'flex', gap: 4 }}>
                    <button className="btn-ghost" style={{ padding: 6 }}><Edit size={14} /></button>
                    <button className="btn-ghost" style={{ padding: 6, color: 'var(--color-error-500)' }}><Trash2 size={14} /></button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function OrderManagement() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <DashSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <MobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Order Management</h1>
        <div className="tab-group" style={{ marginBottom: 20, display: 'inline-flex' }}>
          {['All', 'Pending', 'Confirmed', 'Shipped', 'Delivered'].map((t, i) => (
            <button key={t} className={`tab-item ${i === 0 ? 'active' : ''}`}>{t}</button>
          ))}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead><tr><th>Order ID</th><th>Product</th><th>Buyer</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
            <tbody>
              {mockOrders.map(o => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 600, fontSize: '0.8rem' }}>{o.id}</td>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <img src={o.product.images[0]} alt="" style={{ width: 32, height: 32, borderRadius: 4, objectFit: 'cover' }} />
                    <span style={{ fontSize: '0.8rem' }}>{o.product.title.slice(0, 25)}</span>
                  </div></td>
                  <td style={{ fontSize: '0.8rem' }}>{o.buyer.name}</td>
                  <td style={{ fontWeight: 600 }}>GHS {o.totalAmount.toLocaleString()}</td>
                  <td><span className={`badge badge-${o.status === 'delivered' ? 'success' : o.status === 'shipped' ? 'primary' : o.status === 'pending' ? 'warning' : 'error'}`}>{o.status}</span></td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{new Date(o.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <DashSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <MobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Analytics</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {['Views Over Time', 'Sales Performance', 'Top Products'].map((title, idx) => (
            <div key={title} className="card-flat" style={{ padding: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 16, fontSize: '0.9rem' }}>{title}</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 140 }}>
                {Array.from({ length: 7 }, (_, i) => {
                  const h = 30 + Math.random() * 70;
                  return <div key={i} style={{ flex: 1, height: `${h}%`, background: idx === 0 ? 'var(--gradient-primary)' : idx === 1 ? 'var(--gradient-accent)' : 'var(--color-success-500)', borderRadius: '4px 4px 0 0', opacity: 0.7 }} />;
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d} style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>{d}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WalletPage() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <DashSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <MobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Wallet</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
          <div style={{ background: 'var(--gradient-primary)', borderRadius: 'var(--radius-lg)', padding: 24, color: 'white' }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: 4 }}>Available Balance</p>
            <p style={{ fontSize: '2rem', fontWeight: 800 }}>GHS 12,450</p>
            <button style={{ marginTop: 16, padding: '8px 20px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>Withdraw</button>
          </div>
          <div style={{ background: 'var(--gradient-accent)', borderRadius: 'var(--radius-lg)', padding: 24, color: 'white' }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: 4 }}>Pending Earnings</p>
            <p style={{ fontSize: '2rem', fontWeight: 800 }}>GHS 3,780</p>
            <p style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: 16 }}>From 4 pending orders</p>
          </div>
        </div>
        <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Recent Transactions</h3>
        <div className="card-flat">
          {[
            { desc: 'Sale: iPhone 15 Pro Max', amount: '+GHS 8,500', type: 'credit' },
            { desc: 'Withdrawal to MTN MoMo', amount: '-GHS 5,000', type: 'debit' },
            { desc: 'Sale: Kente Dress x2', amount: '+GHS 900', type: 'credit' },
            { desc: 'Sale: Web Development', amount: '+GHS 2,500', type: 'credit' },
            { desc: 'Platform Fee', amount: '-GHS 250', type: 'debit' },
          ].map((tx, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid var(--border-secondary)' }}>
              <span style={{ fontSize: '0.85rem' }}>{tx.desc}</span>
              <span style={{ fontWeight: 700, color: tx.type === 'credit' ? 'var(--color-success-500)' : 'var(--color-error-500)' }}>{tx.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
