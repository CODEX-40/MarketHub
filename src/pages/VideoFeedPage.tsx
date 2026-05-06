import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, Bookmark, ShoppingBag, Play, VolumeX, Volume2, Music } from 'lucide-react';
import { mockVideos } from '../data/mockVideos';

export default function VideoFeedPage() {
  const [videos, setVideos] = useState(mockVideos.map(v => ({ ...v })));
  const [mutedAll, setMutedAll] = useState(true);
  const toggleLike = (id: string) => setVideos(p => p.map(v => v.id === id ? { ...v, isLiked: !v.isLiked, likes: v.isLiked ? v.likes - 1 : v.likes + 1 } : v));
  const toggleSave = (id: string) => setVideos(p => p.map(v => v.id === id ? { ...v, isSaved: !v.isSaved, saves: v.isSaved ? v.saves - 1 : v.saves + 1 } : v));
  const fmt = (n: number) => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n.toString();

  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{ position: 'sticky', top: 72, zIndex: 10, background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-primary)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Play size={22} color="var(--color-primary-500)" fill="var(--color-primary-500)" /> Ad Centre
          </h1>
          <button onClick={() => setMutedAll(!mutedAll)} className="btn-ghost" style={{ padding: 8 }}>
            {mutedAll ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
      <div className="video-feed-container" style={{ maxWidth: 480, margin: '0 auto' }}>
        {videos.map(video => (
          <div key={video.id} className="video-card" style={{ background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img src={video.thumbnailUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
            <div style={{ position: 'absolute', width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Play size={28} color="white" fill="white" />
            </div>
            <span style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
              0:{video.duration < 10 ? `0${video.duration}` : video.duration}
            </span>
            <div style={{ position: 'absolute', right: 12, bottom: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <Link to={`/profile/${video.creator.id}`} style={{ position: 'relative' }}>
                <img src={video.creator.avatar} alt="" style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid white' }} />
              </Link>
              {[
                { icon: Heart, count: video.likes, active: video.isLiked, color: '#EF4444', fn: () => toggleLike(video.id) },
                { icon: MessageCircle, count: video.comments, active: false, color: 'white', fn: () => {} },
                { icon: Share2, count: video.shares, active: false, color: 'white', fn: () => {} },
                { icon: Bookmark, count: video.saves, active: video.isSaved, color: '#EAB308', fn: () => toggleSave(video.id) },
              ].map((b, i) => (
                <button key={i} onClick={b.fn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer' }}>
                  <b.icon size={28} color={b.active ? b.color : 'white'} fill={b.active ? b.color : 'none'} />
                  <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 600 }}>{fmt(b.count)}</span>
                </button>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 60, padding: 16, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <Link to={`/profile/${video.creator.id}`} style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8, display: 'block' }}>@{video.creator.username}</Link>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{video.caption}</p>
              {video.product && (
                <Link to={`/product/${video.product.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'var(--gradient-accent)', borderRadius: 'var(--radius-full)', color: 'white', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 12px rgba(249,115,22,0.4)' }}>
                  <ShoppingBag size={14} /> Shop Now — GHS {video.product.price.toLocaleString()}
                </Link>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
                <Music size={12} color="white" />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>Promotional Ad • {video.duration}s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
