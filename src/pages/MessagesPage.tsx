import { useMemo, useState } from 'react';
import { Send, Image, DollarSign, Search, Check, CheckCheck } from 'lucide-react';
import { mockConversations, mockMessages } from '../data/mockMessages';
import type { Conversation, Message } from '../types';
import { useAuth } from '../context/AuthContext';

function baseThreadForConversation(convo: Conversation): Message[] {
  if (convo.id === 'c1') return mockMessages;
  return [convo.lastMessage];
}

export default function MessagesPage() {
  const { user } = useAuth();
  const meId = user?.id ?? 'u1';
  const [activeConvo, setActiveConvo] = useState<Conversation | null>(mockConversations[0]);
  const [message, setMessage] = useState('');
  const [showConvoList, setShowConvoList] = useState(true);
  const [extraByConvo, setExtraByConvo] = useState<Record<string, Message[]>>({});

  const threadMessages = useMemo(() => {
    if (!activeConvo) return [];
    const base = baseThreadForConversation(activeConvo);
    const extra = extraByConvo[activeConvo.id] ?? [];
    return [...base, ...extra];
  }, [activeConvo, extraByConvo]);

  const handleSend = () => {
    if (!message.trim() || !activeConvo) return;
    const other = activeConvo.participants.find(p => p.id !== meId) ?? activeConvo.participants[1];
    const newMsg: Message = {
      id: `local-${Date.now()}`,
      senderId: meId,
      receiverId: other.id,
      content: message.trim(),
      type: 'text',
      timestamp: new Date().toISOString(),
      isRead: false,
    };
    setExtraByConvo(prev => ({
      ...prev,
      [activeConvo.id]: [...(prev[activeConvo.id] ?? []), newMsg],
    }));
    setMessage('');
  };

  return (
    <div className="page-wrapper" style={{ paddingBottom: 0 }}>
      <div className="container" style={{ height: 'calc(100vh - 72px)', display: 'flex', gap: 0, padding: 0, maxWidth: 1200 }}>
        {/* Conversation List */}
        <div className={`msg-list ${!showConvoList ? 'msg-list-hidden' : ''}`} style={{
          width: 340, borderRight: '1px solid var(--border-primary)', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)',
        }}>
          <div style={{ padding: 16, borderBottom: '1px solid var(--border-primary)' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Messages</h2>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
              <input placeholder="Search conversations..." className="input-field" style={{ paddingLeft: 34, fontSize: '0.8rem' }} />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {mockConversations.map(convo => {
              const other = convo.participants[1];
              const isActive = activeConvo?.id === convo.id;
              return (
                <div key={convo.id} onClick={() => { setActiveConvo(convo); setShowConvoList(false); }}
                  style={{ display: 'flex', gap: 12, padding: '12px 16px', cursor: 'pointer', background: isActive ? 'var(--bg-secondary)' : 'transparent', borderLeft: isActive ? '3px solid var(--color-primary-500)' : '3px solid transparent', transition: 'all var(--transition-fast)' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <img src={other.avatar} alt="" style={{ width: 44, height: 44, borderRadius: '50%' }} />
                    <span className="online-indicator" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{other.name}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                        {new Date(convo.lastMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 180 }}>
                        {convo.lastMessage.type === 'offer' ? `💰 Offer: GHS ${convo.lastMessage.offerAmount}` : convo.lastMessage.content}
                      </p>
                      {convo.unreadCount > 0 && (
                        <span style={{ background: 'var(--color-primary-500)', color: 'white', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, flexShrink: 0 }}>
                          {convo.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Window */}
        <div className={`msg-chat ${showConvoList ? 'msg-chat-hidden' : ''}`} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {activeConvo ? (
            <>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <button onClick={() => setShowConvoList(true)} className="btn-ghost msg-back" style={{ padding: 6 }}>←</button>
                <img src={activeConvo.participants[1].avatar} alt="" style={{ width: 36, height: 36, borderRadius: '50%' }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{activeConvo.participants[1].name}</p>
                  <p style={{ fontSize: '0.65rem', color: 'var(--color-success-500)' }}>Online</p>
                </div>
                {activeConvo.product && (
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', fontSize: '0.75rem' }}>
                    <img src={activeConvo.product.images[0]} alt="" style={{ width: 28, height: 28, borderRadius: 4, objectFit: 'cover' }} />
                    <span style={{ fontWeight: 500 }}>GHS {activeConvo.product.price.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {threadMessages.map(msg => {
                  const isMine = msg.senderId === meId;
                  return (
                    <div key={msg.id} style={{ display: 'flex', justifyContent: isMine ? 'flex-end' : 'flex-start' }}>
                      <div style={{
                        maxWidth: '75%', padding: msg.type === 'offer' ? 0 : '10px 14px',
                        borderRadius: 16, background: isMine ? 'var(--gradient-primary)' : 'var(--bg-secondary)',
                        color: isMine ? 'white' : 'var(--text-primary)',
                        borderBottomRightRadius: isMine ? 4 : 16, borderBottomLeftRadius: isMine ? 16 : 4,
                        overflow: 'hidden',
                      }}>
                        {msg.type === 'offer' ? (
                          <div style={{ background: isMine ? 'var(--gradient-accent)' : 'var(--bg-tertiary)', padding: '12px 16px', textAlign: 'center' }}>
                            <DollarSign size={16} style={{ margin: '0 auto 4px' }} />
                            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>GHS {msg.offerAmount}</p>
                            <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>{msg.offerStatus === 'countered' ? 'Counter Offer' : 'Price Offer'}</p>
                            {msg.offerStatus === 'pending' && (
                              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                                <button className="btn-primary" style={{ flex: 1, padding: '6px', fontSize: '0.7rem' }}>Accept</button>
                                <button className="btn-secondary" style={{ flex: 1, padding: '6px', fontSize: '0.7rem' }}>Decline</button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <>
                            <p style={{ fontSize: '0.85rem' }}>{msg.content}</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, marginTop: 4 }}>
                              <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>
                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                              {isMine && (msg.isRead ? <CheckCheck size={12} style={{ opacity: 0.6 }} /> : <Check size={12} style={{ opacity: 0.6 }} />)}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-primary)', display: 'flex', gap: 8, alignItems: 'center' }}>
                <button className="btn-ghost" style={{ padding: 8 }}><Image size={20} /></button>
                <button className="btn-ghost" style={{ padding: 8 }}><DollarSign size={20} /></button>
                <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message..."
                  className="input-field" style={{ flex: 1, borderRadius: 'var(--radius-full)' }}
                  onKeyDown={e => e.key === 'Enter' && handleSend()} />
                <button onClick={handleSend} className="btn-primary" style={{ padding: 10, borderRadius: '50%' }}>
                  <Send size={18} />
                </button>
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '3rem', marginBottom: 8 }}>💬</p>
                <p style={{ fontWeight: 600 }}>Select a conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .msg-back { display: inline-flex; }
        @media (max-width: 767px) {
          .msg-list { width: 100% !important; position: absolute; inset: 0; z-index: 2; }
          .msg-list-hidden { display: none !important; }
          .msg-chat { width: 100% !important; }
          .msg-chat-hidden { display: none !important; }
        }
        @media (min-width: 768px) {
          .msg-back { display: none !important; }
          .msg-list { display: flex !important; }
          .msg-chat { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
