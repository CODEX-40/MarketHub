import type { Conversation, Message, Order } from '../types';
import { mockUsers } from './mockUsers';
import { mockProducts } from './mockProducts';

export const mockMessages: Message[] = [
  { id: 'm1', senderId: 'u2', receiverId: 'u1', content: 'Hi! Is the Kente dress still available in size M?', type: 'text', timestamp: '2025-04-30T10:30:00', isRead: true },
  { id: 'm2', senderId: 'u1', receiverId: 'u2', content: 'Yes it is! Would you like to place an order?', type: 'text', timestamp: '2025-04-30T10:32:00', isRead: true },
  { id: 'm3', senderId: 'u2', receiverId: 'u1', content: 'Can you do GHS 400 instead of 450?', type: 'offer', offerAmount: 400, offerStatus: 'pending', timestamp: '2025-04-30T10:35:00', isRead: true },
  { id: 'm4', senderId: 'u1', receiverId: 'u2', content: 'How about GHS 420? Best I can do.', type: 'offer', offerAmount: 420, offerStatus: 'countered', timestamp: '2025-04-30T10:38:00', isRead: false },
];

export const mockConversations: Conversation[] = [
  { id: 'c1', participants: [mockUsers[0], mockUsers[1]], lastMessage: mockMessages[3], unreadCount: 1, product: mockProducts[1] },
  { id: 'c2', participants: [mockUsers[0], mockUsers[6]], lastMessage: { id: 'm5', senderId: 'u7', receiverId: 'u1', content: 'Your iPhone order has been shipped!', type: 'text', timestamp: '2025-04-29T14:20:00', isRead: false }, unreadCount: 1, product: mockProducts[0] },
  { id: 'c3', participants: [mockUsers[0], mockUsers[3]], lastMessage: { id: 'm6', senderId: 'u1', receiverId: 'u4', content: 'Can you cater for 50 people next Saturday?', type: 'text', timestamp: '2025-04-28T09:15:00', isRead: true }, unreadCount: 0, product: mockProducts[3] },
  { id: 'c4', participants: [mockUsers[0], mockUsers[4]], lastMessage: { id: 'm7', senderId: 'u5', receiverId: 'u1', content: 'I can schedule a viewing for tomorrow at 2pm.', type: 'text', timestamp: '2025-04-27T16:45:00', isRead: true }, unreadCount: 0, product: mockProducts[4] },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001', product: mockProducts[0], buyer: mockUsers[0], seller: mockUsers[6], quantity: 1,
    totalAmount: 8500, status: 'shipped', paymentMethod: 'Mobile Money', shippingAddress: 'Accra, Ghana',
    trackingNumber: 'TRK-2025-001', createdAt: '2025-04-28T10:00:00', updatedAt: '2025-04-29T14:00:00'
  },
  {
    id: 'ORD-002', product: mockProducts[1], buyer: mockUsers[0], seller: mockUsers[1], quantity: 2,
    totalAmount: 900, status: 'delivered', paymentMethod: 'Card Payment', shippingAddress: 'Accra, Ghana',
    createdAt: '2025-04-25T08:00:00', updatedAt: '2025-04-27T10:00:00'
  },
  {
    id: 'ORD-003', product: mockProducts[3], buyer: mockUsers[0], seller: mockUsers[3], quantity: 50,
    totalAmount: 1750, status: 'confirmed', paymentMethod: 'Mobile Money', shippingAddress: 'East Legon, Accra',
    createdAt: '2025-04-30T09:00:00', updatedAt: '2025-04-30T09:30:00'
  },
  {
    id: 'ORD-004', product: mockProducts[11], buyer: mockUsers[2], seller: mockUsers[6], quantity: 1,
    totalAmount: 2200, status: 'pending', paymentMethod: 'Bank Transfer', shippingAddress: 'Tema, Ghana',
    createdAt: '2025-04-30T15:00:00', updatedAt: '2025-04-30T15:00:00'
  },
  {
    id: 'ORD-005', product: mockProducts[6], buyer: mockUsers[7], seller: mockUsers[5], quantity: 1,
    totalAmount: 500, status: 'delivered', paymentMethod: 'Mobile Money', shippingAddress: 'Takoradi, Ghana',
    createdAt: '2025-04-20T12:00:00', updatedAt: '2025-04-22T18:00:00'
  },
];
