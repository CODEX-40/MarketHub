import type { VideoAd } from '../types';
import { mockUsers } from './mockUsers';
import { mockProducts } from './mockProducts';

export const mockVideos: VideoAd[] = [
  {
    id: 'v1', creator: mockUsers[6], thumbnailUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=700&fit=crop',
    videoUrl: '', caption: '🔥 iPhone 15 Pro Max UNBOXING! Natural Titanium is INSANE! Limited stock available. #iPhone15 #TechReview #MarketHub',
    product: mockProducts[0], likes: 12400, comments: 345, shares: 890, saves: 567, duration: 45, isLiked: false, isSaved: false, createdAt: '2025-04-29'
  },
  {
    id: 'v2', creator: mockUsers[1], thumbnailUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=700&fit=crop',
    videoUrl: '', caption: '✨ New Kente collection just dropped! Each piece is hand-woven with love. DM to order! #AfricanFashion #Kente #Style',
    product: mockProducts[1], likes: 8900, comments: 234, shares: 567, saves: 890, duration: 30, isLiked: true, isSaved: false, createdAt: '2025-04-28'
  },
  {
    id: 'v3', creator: mockUsers[3], thumbnailUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=700&fit=crop',
    videoUrl: '', caption: '🍛 The BEST Jollof Rice in Accra! We cater for all events. Book now for your next party! #JollofRice #Catering #GhanaFood',
    product: mockProducts[3], likes: 15600, comments: 678, shares: 1234, saves: 456, duration: 60, isLiked: false, isSaved: true, createdAt: '2025-04-27'
  },
  {
    id: 'v4', creator: mockUsers[2], thumbnailUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=700&fit=crop',
    videoUrl: '', caption: '🚗 2022 Toyota Camry Full Option Tour! Clean, accident-free, best price in Ghana. Call now! #Cars #Toyota #AutoDealer',
    product: mockProducts[2], likes: 5600, comments: 123, shares: 345, saves: 234, duration: 55, isLiked: false, isSaved: false, createdAt: '2025-04-26'
  },
  {
    id: 'v5', creator: mockUsers[5], thumbnailUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=700&fit=crop',
    videoUrl: '', caption: '💪 30-day transformation challenge! Join our fitness program and see results. Link in bio! #Fitness #Training #Health',
    product: mockProducts[6], likes: 23400, comments: 890, shares: 2345, saves: 1234, duration: 40, isLiked: true, isSaved: true, createdAt: '2025-04-25'
  },
  {
    id: 'v6', creator: mockUsers[4], thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=700&fit=crop',
    videoUrl: '', caption: '🏠 Luxury 3BR house tour in East Legon! Pool, security, fully furnished. Available now! #RealEstate #Luxury #Accra',
    product: mockProducts[4], likes: 7800, comments: 234, shares: 567, saves: 345, duration: 50, isLiked: false, isSaved: false, createdAt: '2025-04-24'
  },
  {
    id: 'v7', creator: mockUsers[7], thumbnailUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=700&fit=crop',
    videoUrl: '', caption: '🛋️ Modern living room makeover! See how we transformed this space. Furniture available for purchase! #InteriorDesign #HomeDecor',
    product: mockProducts[8], likes: 9800, comments: 456, shares: 789, saves: 567, duration: 35, isLiked: false, isSaved: false, createdAt: '2025-04-23'
  },
  {
    id: 'v8', creator: mockUsers[0], thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=700&fit=crop',
    videoUrl: '', caption: '💻 Need a professional website? I build stunning React websites in 2 weeks! Check out my portfolio. #WebDev #Coding #Freelancer',
    product: mockProducts[10], likes: 4500, comments: 167, shares: 234, saves: 389, duration: 25, isLiked: false, isSaved: false, createdAt: '2025-04-22'
  },
];
