import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, FileWarning, AlertTriangle, BarChart3, TrendingUp, UserCheck, Eye, Ban, CheckCircle } from 'lucide-react';
import { mockUsers } from '../../data/mockUsers';

const adminLinks = [
  { path: '/admin', label: 'Overview', icon: BarChart3 },
  { path: '/admin/users', label: 'Users', icon: Users },
  { path: '/admin/moderation', label: 'Moderation', icon: FileWarning },
  { path: '/admin/fraud', label: 'Fraud Detection', icon: AlertTriangle },
];

function AdminSidebar() {
  const location = useLocation();
  return (
    <div style={{ width: 240, flexShrink: 0, borderRight: '1px solid var(--border-primary)', padding: '16px 0', display: 'none' }} className="admin-sidebar">
      <h2 style={{ padding: '0 20px 16px', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Shield size={18} color="var(--color-primary-500)" /> Admin Panel
      </h2>
      {adminLinks.map(link => (
        <Link key={link.path} to={link.path} style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px', fontSize: '0.85rem', fontWeight: 500,
          color: location.pathname === link.path ? 'var(--color-primary-500)' : 'var(--text-secondary)',
          background: location.pathname === link.path ? 'var(--bg-secondary)' : 'transparent',
          borderRight: location.pathname === link.path ? '3px solid var(--color-primary-500)' : '3px solid transparent',
        }}>
          <link.icon size={18} /> {link.label}
        </Link>
      ))}
      <style>{`@media (min-width: 1024px) { .admin-sidebar { display: block !important; } }`}</style>
    </div>
  );
}

function AdminMobileTabs() {
  const location = useLocation();
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: 4, padding: '12px 0', borderBottom: '1px solid var(--border-primary)', marginBottom: 20 }} className="admin-mobile-tabs">
      {adminLinks.map(link => (
        <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'btn-primary' : 'btn-ghost'}
          style={{ fontSize: '0.75rem', padding: '6px 14px', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <link.icon size={14} /> {link.label}
        </Link>
      ))}
      <style>{`@media (min-width: 1024px) { .admin-mobile-tabs { display: none !important; } }`}</style>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <AdminMobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Admin Dashboard</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Total Users', value: '12,456', icon: Users, color: '#6366F1' },
            { label: 'Active Listings', value: '8,923', icon: TrendingUp, color: '#22C55E' },
            { label: 'Transactions', value: '45,678', icon: BarChart3, color: '#F97316' },
            { label: 'Reports', value: '23', icon: AlertTriangle, color: '#EF4444' },
          ].map(stat => (
            <div key={stat.label} className="stat-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <stat.icon size={18} color={stat.color} />
                </div>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>{stat.value}</p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="card-flat" style={{ padding: 20 }}>
          <h3 style={{ fontWeight: 600, marginBottom: 16, fontSize: '0.9rem' }}>User Growth</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 160 }}>
            {[30, 45, 55, 40, 65, 70, 85, 60, 75, 90, 80, 100].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--gradient-primary)', borderRadius: '4px 4px 0 0', opacity: 0.5 + i * 0.04 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function UserManagement() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <AdminMobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>User Management</h1>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead><tr><th>User</th><th>Email</th><th>Status</th><th>Sales</th><th>Actions</th></tr></thead>
            <tbody>
              {mockUsers.map(u => (
                <tr key={u.id}>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src={u.avatar} alt="" style={{ width: 32, height: 32, borderRadius: '50%' }} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{u.name}</p>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>@{u.username}</p>
                    </div>
                  </div></td>
                  <td style={{ fontSize: '0.8rem' }}>{u.email}</td>
                  <td>{u.isVerified ? <span className="badge badge-success"><CheckCircle size={10} /> Verified</span> : <span className="badge badge-warning">Unverified</span>}</td>
                  <td style={{ fontWeight: 600 }}>{u.totalSales}</td>
                  <td><div style={{ display: 'flex', gap: 4 }}>
                    <button className="btn-ghost" style={{ padding: 6 }} title="View"><Eye size={14} /></button>
                    <button className="btn-ghost" style={{ padding: 6 }} title="Verify"><UserCheck size={14} /></button>
                    <button className="btn-ghost" style={{ padding: 6, color: 'var(--color-error-500)' }} title="Ban"><Ban size={14} /></button>
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

export function ContentModeration() {
  const reports = [
    { id: 1, type: 'Listing', reason: 'Counterfeit product', reporter: mockUsers[2], status: 'pending' },
    { id: 2, type: 'User', reason: 'Spam messages', reporter: mockUsers[3], status: 'reviewing' },
    { id: 3, type: 'Listing', reason: 'Misleading description', reporter: mockUsers[5], status: 'pending' },
    { id: 4, type: 'Video', reason: 'Inappropriate content', reporter: mockUsers[1], status: 'resolved' },
  ];
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <AdminMobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Content Moderation</h1>
        {reports.map(r => (
          <div key={r.id} className="card-flat" style={{ padding: 16, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <FileWarning size={20} color="var(--color-warning-500)" />
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{r.reason}</p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Type: {r.type} • Reported by: {r.reporter.name}</p>
            </div>
            <span className={`badge badge-${r.status === 'resolved' ? 'success' : r.status === 'reviewing' ? 'primary' : 'warning'}`}>{r.status}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button className="btn-ghost" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>Review</button>
              <button className="btn-ghost" style={{ padding: '4px 10px', fontSize: '0.75rem', color: 'var(--color-error-500)' }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FraudDetection() {
  const alerts = [
    { id: 1, type: 'Suspicious Login', desc: 'Multiple failed login attempts from 192.168.1.x', severity: 'high', time: '5 min ago' },
    { id: 2, type: 'Unusual Transaction', desc: 'Large transaction from new account — GHS 50,000', severity: 'high', time: '1 hour ago' },
    { id: 3, type: 'Account Cloning', desc: 'Similar profiles detected for @user234 and @user567', severity: 'medium', time: '3 hours ago' },
    { id: 4, type: 'Price Manipulation', desc: 'Listing price changed 10x in 24 hours', severity: 'low', time: '1 day ago' },
  ];
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: 'clamp(16px, 3vw, 32px)' }}>
        <AdminMobileTabs />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, fontFamily: 'var(--font-heading)' }}>Fraud Detection</h1>
        {alerts.map(a => (
          <div key={a.id} className="card-flat" style={{ padding: 16, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16, borderLeft: `4px solid ${a.severity === 'high' ? '#EF4444' : a.severity === 'medium' ? '#EAB308' : '#22C55E'}`, flexWrap: 'wrap' }}>
            <AlertTriangle size={20} color={a.severity === 'high' ? '#EF4444' : a.severity === 'medium' ? '#EAB308' : '#22C55E'} />
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{a.type}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{a.desc}</p>
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>{a.time}</span>
            <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.75rem' }}>Investigate</button>
          </div>
        ))}
      </div>
    </div>
  );
}
