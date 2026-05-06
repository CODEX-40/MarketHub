export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  coverPhoto: string;
  bio: string;
  location: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  followers: number;
  following: number;
  joinedDate: string;
  totalSales: number;
  totalPurchases: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: Category;
  subcategory?: string;
  seller: User;
  location: string;
  condition: 'new' | 'like-new' | 'used' | 'refurbished';
  rating: number;
  reviewCount: number;
  views: number;
  likes: number;
  inStock: boolean;
  quantity: number;
  createdAt: string;
  tags: string[];
  specifications?: Record<string, string>;
}

export interface VideoAd {
  id: string;
  creator: User;
  thumbnailUrl: string;
  videoUrl: string;
  caption: string;
  product?: Product;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  duration: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'text' | 'image' | 'offer' | 'file';
  offerAmount?: number;
  offerStatus?: 'pending' | 'accepted' | 'declined' | 'countered';
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
  product?: Product;
}

export interface Order {
  id: string;
  product: Product;
  buyer: User;
  seller: User;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentMethod: string;
  shippingAddress: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  reviewer: User;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: 'order' | 'message' | 'review' | 'follow' | 'like' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  link?: string;
}

export type Category =
  | 'electronics'
  | 'fashion'
  | 'services'
  | 'vehicles'
  | 'food'
  | 'real-estate'
  | 'home-garden'
  | 'sports'
  | 'health-beauty'
  | 'books-media';

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  color: string;
  count: number;
  image: string;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalViews: number;
  conversionRate: number;
  revenueChange: number;
  ordersChange: number;
  viewsChange: number;
  conversionChange: number;
}

export interface AdminStats {
  totalUsers: number;
  activeListings: number;
  totalTransactions: number;
  reportedContent: number;
  newUsersToday: number;
  revenue: number;
}
