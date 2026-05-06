import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Shield, Calendar, Users, ShoppingBag, Settings, UserPlus, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { mockUsers } from '../data/mockUsers';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ui/ProductCard';

export default function ProfilePage() {
  const { id } = useParams();
  const user = mockUsers.find(u => u.id === id) || mockUsers[0];
  const [activeTab, setActiveTab] = useState('listings');
  const [isFollowing, setIsFollowing] = useState(false);
  const userProducts = mockProducts.filter(p => p.seller.id === user.id);

  const isOwnProfile = id === 'u1';

  return (
    <div className="page-wrapper">
      {/* Cover */}
      <div style={{ position: 'relative', height: 'clamp(160px, 25vw, 280px)', background: 'var(--bg-tertiary)' }}>
        <img src={user.coverPhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary), transparent 60%)' }} />
      </div>

      <div className="container" style={{ marginTop: -60, position: 'relative', zIndex: 2 }}>
        {/* Profile Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <img src={user.avatar} alt={user.name} style={{
            width: 'clamp(80px, 12vw, 120px)', height: 'clamp(80px, 12vw, 120px)', borderRadius: '50%',
            border: '4px solid var(--bg-primary)', background: 'var(--bg-tertiary)',
          }} />
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-heading)' }}>
              {user.name}
              {user.isVerified && <Shield size={20} color="var(--color-primary-500)" fill="var(--color-primary-100)" />}
            </h1>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>@{user.username}</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {isOwnProfile ? (
              <Link to="/settings" className="btn-secondary" style={{ fontSize: '0.8rem' }}><Settings size={16} /> Edit Profile</Link>
            ) : (
              <>
                <button onClick={() => setIsFollowing(!isFollowing)} className={isFollowing ? 'btn-secondary' : 'btn-primary'} style={{ fontSize: '0.8rem' }}>
                  {isFollowing ? <><UserCheck size={16} /> Following</> : <><UserPlus size={16} /> Follow</>}
                </button>
                <Link to="/messages" className="btn-secondary" style={{ fontSize: '0.8rem' }}>Message</Link>
              </>
            )}
          </div>
        </div>

        {/* Bio & Stats */}
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: '0.9rem', maxWidth: 600 }}>{user.bio}</p>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={14} /> {user.location}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> Joined {new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Star size={14} color="#EAB308" fill="#EAB308" /> {user.rating} ({user.reviewCount} reviews)</span>
        </div>

        <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
          {[
            { label: 'Followers', value: user.followers.toLocaleString(), icon: Users },
            { label: 'Following', value: user.following.toLocaleString(), icon: Users },
            { label: 'Sales', value: user.totalSales.toLocaleString(), icon: ShoppingBag },
          ].map(stat => (
            <div key={stat.label} className="card-flat" style={{ padding: '12px 20px', textAlign: 'center', minWidth: 100 }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tab-group" style={{ marginBottom: 24, display: 'inline-flex' }}>
          {['listings', 'reviews', 'about'].map(tab => (
            <button key={tab} className={`tab-item ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)} style={{ textTransform: 'capitalize' }}>
              {tab} {tab === 'listings' && `(${userProducts.length})`}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'listings' && (
          <div className="product-grid" style={{ paddingBottom: 48 }}>
            {userProducts.length > 0 ? userProducts.map(p => <ProductCard key={p.id} product={p} />) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 48, color: 'var(--text-tertiary)' }}>
                <p style={{ fontSize: '2rem', marginBottom: 8 }}>📦</p>
                <p>No listings yet</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div style={{ paddingBottom: 48 }}>
            {[5, 4, 5, 4, 3].map((r, i) => (
              <div key={i} className="card-flat" style={{ padding: 16, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <img src={mockUsers[(i + 2) % mockUsers.length].avatar} alt="" style={{ width: 36, height: 36, borderRadius: '50%' }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{mockUsers[(i + 2) % mockUsers.length].name}</p>
                    <div style={{ display: 'flex', gap: 2 }}>{Array.from({ length: 5 }, (_, j) => <Star key={j} size={12} color="#EAB308" fill={j < r ? '#EAB308' : 'none'} />)}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>2 weeks ago</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {['Great seller! Fast delivery and exactly as described.', 'Amazing quality, will buy again!', 'Very professional and responsive. Highly recommended!', 'Good product but delivery took a bit long.', 'Decent quality for the price. Okay experience.'][i]}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="card-flat" style={{ padding: 24, marginBottom: 48, maxWidth: 600 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 12 }}>About {user.name}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16, fontSize: '0.9rem' }}>{user.bio}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontSize: '0.85rem' }}><strong>Location:</strong> <span style={{ color: 'var(--text-secondary)' }}>{user.location}</span></p>
              <p style={{ fontSize: '0.85rem' }}><strong>Member since:</strong> <span style={{ color: 'var(--text-secondary)' }}>{new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span></p>
              <p style={{ fontSize: '0.85rem' }}><strong>Email:</strong> <span style={{ color: 'var(--text-secondary)' }}>{user.email}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
