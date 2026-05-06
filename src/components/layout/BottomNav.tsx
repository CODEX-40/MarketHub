import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlayCircle, MessageCircle, User } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const links = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/marketplace', icon: Search, label: 'Explore' },
    { path: '/ads', icon: PlayCircle, label: 'Ads' },
    { path: '/messages', icon: MessageCircle, label: 'Chat' },
    { path: '/profile/u1', icon: User, label: 'Profile' },
  ];

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
      background: 'var(--bg-primary)', borderTop: '1px solid var(--border-primary)',
      display: 'flex', justifyContent: 'space-around', padding: '6px 0 env(safe-area-inset-bottom, 6px)',
    }} className="bottom-nav">
      {links.map(link => {
        const active = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
        return (
          <Link key={link.path} to={link.path} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            padding: '6px 12px', color: active ? 'var(--color-primary-500)' : 'var(--text-tertiary)',
            fontSize: '0.65rem', fontWeight: active ? 600 : 500, textDecoration: 'none', transition: 'color var(--transition-fast)',
            position: 'relative',
          }}>
            {link.path === '/ads' ? (
              <div style={{
                width: 44, height: 44, borderRadius: '50%', background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -20,
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
              }}>
                <link.icon size={22} color="white" />
              </div>
            ) : (
              <link.icon size={22} />
            )}
            <span>{link.label}</span>
          </Link>
        );
      })}
      <style>{`
        @media (min-width: 768px) { .bottom-nav { display: none !important; } }
      `}</style>
    </div>
  );
}
