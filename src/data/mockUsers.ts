import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'u1', name: 'Kwame Asante', username: 'kwameasante', email: 'kwame@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kwame', coverPhoto: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop',
    bio: 'Tech enthusiast & digital entrepreneur. Selling premium gadgets and offering IT services.', location: 'Accra, Ghana',
    isVerified: true, rating: 4.8, reviewCount: 156, followers: 2340, following: 180, joinedDate: '2024-03-15', totalSales: 342, totalPurchases: 28
  },
  {
    id: 'u2', name: 'Ama Serwaa', username: 'amaserwaa', email: 'ama@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Ama', coverPhoto: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=400&fit=crop',
    bio: 'Fashion designer & stylist. Handmade African prints and modern fashion.', location: 'Kumasi, Ghana',
    isVerified: true, rating: 4.9, reviewCount: 203, followers: 5120, following: 320, joinedDate: '2024-01-20', totalSales: 567, totalPurchases: 45
  },
  {
    id: 'u3', name: 'Kofi Mensah', username: 'kofimensah', email: 'kofi@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kofi', coverPhoto: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop',
    bio: 'Auto dealer specializing in quality used vehicles. Best prices guaranteed!', location: 'Tema, Ghana',
    isVerified: true, rating: 4.6, reviewCount: 89, followers: 1560, following: 95, joinedDate: '2024-05-10', totalSales: 78, totalPurchases: 12
  },
  {
    id: 'u4', name: 'Efua Darkwa', username: 'efuadarkwa', email: 'efua@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Efua', coverPhoto: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop',
    bio: 'Home chef & caterer. Authentic Ghanaian cuisine delivered to your door.', location: 'Accra, Ghana',
    isVerified: false, rating: 4.7, reviewCount: 134, followers: 890, following: 210, joinedDate: '2024-06-01', totalSales: 456, totalPurchases: 67
  },
  {
    id: 'u5', name: 'Yaw Boateng', username: 'yawboateng', email: 'yaw@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Yaw', coverPhoto: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop',
    bio: 'Real estate agent with 10+ years experience. Find your dream property!', location: 'East Legon, Accra',
    isVerified: true, rating: 4.5, reviewCount: 67, followers: 3200, following: 150, joinedDate: '2024-02-14', totalSales: 23, totalPurchases: 5
  },
  {
    id: 'u6', name: 'Abena Osei', username: 'abenaosei', email: 'abena@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Abena', coverPhoto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
    bio: 'Fitness coach & wellness products. Transform your life today!', location: 'Takoradi, Ghana',
    isVerified: false, rating: 4.8, reviewCount: 92, followers: 1780, following: 290, joinedDate: '2024-04-20', totalSales: 189, totalPurchases: 34
  },
  {
    id: 'u7', name: 'Nana Agyeman', username: 'nanaagyeman', email: 'nana@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Nana', coverPhoto: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=400&fit=crop',
    bio: 'Electronics & gadgets store. Latest phones, laptops & accessories.', location: 'Accra Mall, Ghana',
    isVerified: true, rating: 4.4, reviewCount: 245, followers: 4500, following: 67, joinedDate: '2023-11-01', totalSales: 1230, totalPurchases: 89
  },
  {
    id: 'u8', name: 'Akua Mansa', username: 'akuamansa', email: 'akua@markethub.com',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Akua', coverPhoto: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=400&fit=crop',
    bio: 'Interior designer & home decor specialist. Making spaces beautiful.', location: 'Cantonments, Accra',
    isVerified: false, rating: 4.9, reviewCount: 78, followers: 2100, following: 340, joinedDate: '2024-07-15', totalSales: 145, totalPurchases: 56
  },
];

export const currentUser: User = mockUsers[0];
