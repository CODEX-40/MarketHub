import type { Product } from '../types';
import { mockUsers } from './mockUsers';

export const mockProducts: Product[] = [
  {
    id: 'p1', title: 'iPhone 15 Pro Max - 256GB', description: 'Brand new iPhone 15 Pro Max in Natural Titanium. Comes with full box, warranty card, and accessories. A17 Pro chip, 48MP camera system.',
    price: 8500, originalPrice: 9200, images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop'],
    category: 'electronics', seller: mockUsers[6], location: 'Accra Mall, Ghana', condition: 'new',
    rating: 4.8, reviewCount: 45, views: 1234, likes: 89, inStock: true, quantity: 5, createdAt: '2025-04-28', tags: ['iphone', 'apple', 'smartphone', 'premium'],
    specifications: { 'Storage': '256GB', 'Color': 'Natural Titanium', 'Chip': 'A17 Pro', 'Display': '6.7" Super Retina XDR' }
  },
  {
    id: 'p2', title: 'Handmade Kente Dress - Premium', description: 'Beautiful handwoven Kente fabric dress. Perfect for special occasions, weddings, and cultural events. Available in multiple sizes.',
    price: 450, originalPrice: 600, images: ['https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop'],
    category: 'fashion', seller: mockUsers[1], location: 'Kumasi, Ghana', condition: 'new',
    rating: 4.9, reviewCount: 78, views: 2345, likes: 156, inStock: true, quantity: 12, createdAt: '2025-04-25', tags: ['kente', 'african fashion', 'dress', 'handmade'],
    specifications: { 'Material': 'Hand-woven Kente', 'Sizes': 'S, M, L, XL', 'Care': 'Dry clean only' }
  },
  {
    id: 'p3', title: 'Toyota Camry 2022 - Full Option', description: 'Clean Toyota Camry 2022 model. Full option with leather seats, sunroof, reverse camera. Low mileage, accident-free.',
    price: 185000, images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=600&fit=crop'],
    category: 'vehicles', seller: mockUsers[2], location: 'Tema, Ghana', condition: 'used',
    rating: 4.6, reviewCount: 12, views: 3456, likes: 67, inStock: true, quantity: 1, createdAt: '2025-04-20', tags: ['toyota', 'camry', 'sedan', 'automatic'],
    specifications: { 'Year': '2022', 'Mileage': '25,000 km', 'Transmission': 'Automatic', 'Fuel': 'Petrol' }
  },
  {
    id: 'p4', title: 'Jollof Rice Catering - Per Plate', description: 'Authentic Ghanaian Jollof rice with your choice of protein. Perfect for events, parties, and gatherings. Minimum order: 20 plates.',
    price: 35, images: ['https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop'],
    category: 'food', seller: mockUsers[3], location: 'Accra, Ghana', condition: 'new',
    rating: 4.7, reviewCount: 134, views: 5678, likes: 234, inStock: true, quantity: 100, createdAt: '2025-04-30', tags: ['jollof', 'catering', 'food', 'party'],
    specifications: { 'Min Order': '20 plates', 'Proteins': 'Chicken, Fish, Beef', 'Delivery': 'Available in Accra' }
  },
  {
    id: 'p5', title: '3 Bedroom House - East Legon', description: 'Luxurious 3-bedroom house for rent in East Legon. Fully furnished with modern amenities, swimming pool, and 24/7 security.',
    price: 3500, images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=600&fit=crop'],
    category: 'real-estate', seller: mockUsers[4], location: 'East Legon, Accra', condition: 'new',
    rating: 4.5, reviewCount: 23, views: 4567, likes: 123, inStock: true, quantity: 1, createdAt: '2025-04-18', tags: ['house', 'rent', 'east legon', 'luxury'],
    specifications: { 'Bedrooms': '3', 'Bathrooms': '3', 'Parking': '2 Cars', 'Price': 'Per Month' }
  },
  {
    id: 'p6', title: 'MacBook Pro M3 - 14 inch', description: 'Apple MacBook Pro with M3 chip. 16GB RAM, 512GB SSD. Space Gray. Perfect for professionals and creatives.',
    price: 12500, originalPrice: 14000, images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop'],
    category: 'electronics', seller: mockUsers[6], location: 'Accra Mall, Ghana', condition: 'new',
    rating: 4.9, reviewCount: 34, views: 2890, likes: 145, inStock: true, quantity: 3, createdAt: '2025-04-26', tags: ['macbook', 'apple', 'laptop', 'pro'],
    specifications: { 'Chip': 'M3', 'RAM': '16GB', 'Storage': '512GB SSD', 'Display': '14.2" Liquid Retina XDR' }
  },
  {
    id: 'p7', title: 'Fitness Training Package - 1 Month', description: 'Personal fitness training package. Includes gym access, personalized workout plan, nutrition guide, and weekly check-ins.',
    price: 500, originalPrice: 750, images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop'],
    category: 'services', seller: mockUsers[5], location: 'Takoradi, Ghana', condition: 'new',
    rating: 4.8, reviewCount: 56, views: 1890, likes: 98, inStock: true, quantity: 10, createdAt: '2025-04-22', tags: ['fitness', 'training', 'gym', 'health'],
    specifications: { 'Duration': '1 Month', 'Sessions': '12 sessions', 'Includes': 'Nutrition plan', 'Level': 'All levels' }
  },
  {
    id: 'p8', title: 'Samsung Galaxy S24 Ultra', description: 'Samsung Galaxy S24 Ultra with S Pen. 12GB RAM, 256GB storage. Titanium Black. AI-powered camera.',
    price: 7800, images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop'],
    category: 'electronics', seller: mockUsers[6], location: 'Accra Mall, Ghana', condition: 'new',
    rating: 4.7, reviewCount: 67, views: 3456, likes: 178, inStock: true, quantity: 8, createdAt: '2025-04-29', tags: ['samsung', 'galaxy', 'smartphone', 'android'],
    specifications: { 'Storage': '256GB', 'RAM': '12GB', 'Display': '6.8" Dynamic AMOLED', 'Camera': '200MP' }
  },
  {
    id: 'p9', title: 'Modern Living Room Set', description: 'Complete living room furniture set including sofa, coffee table, TV stand, and side tables. Contemporary design.',
    price: 4200, originalPrice: 5500, images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop'],
    category: 'home-garden', seller: mockUsers[7], location: 'Cantonments, Accra', condition: 'new',
    rating: 4.9, reviewCount: 23, views: 1567, likes: 87, inStock: true, quantity: 2, createdAt: '2025-04-24', tags: ['furniture', 'sofa', 'living room', 'modern'],
    specifications: { 'Material': 'Premium Leather', 'Seating': '7-seater', 'Color': 'Gray', 'Assembly': 'Free installation' }
  },
  {
    id: 'p10', title: 'Nike Air Force 1 - Limited Edition', description: 'Authentic Nike Air Force 1 Limited Edition. Brand new in box. Available in sizes 40-45.',
    price: 890, originalPrice: 1100, images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop'],
    category: 'fashion', seller: mockUsers[1], location: 'Kumasi, Ghana', condition: 'new',
    rating: 4.6, reviewCount: 89, views: 4567, likes: 234, inStock: true, quantity: 15, createdAt: '2025-04-27', tags: ['nike', 'sneakers', 'shoes', 'limited'],
    specifications: { 'Brand': 'Nike', 'Sizes': '40-45', 'Color': 'White/Red', 'Material': 'Leather' }
  },
  {
    id: 'p11', title: 'Web Development Service', description: 'Professional website design and development. E-commerce, business websites, portfolios. Responsive, modern, SEO-optimized.',
    price: 2500, images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop'],
    category: 'services', seller: mockUsers[0], location: 'Accra, Ghana', condition: 'new',
    rating: 4.8, reviewCount: 45, views: 2345, likes: 67, inStock: true, quantity: 99, createdAt: '2025-04-15', tags: ['web development', 'website', 'coding', 'design'],
    specifications: { 'Delivery': '2-4 weeks', 'Revisions': '3 included', 'Tech': 'React, Next.js', 'Support': '3 months free' }
  },
  {
    id: 'p12', title: 'Sony WH-1000XM5 Headphones', description: 'Industry-leading noise cancelling headphones. 30-hour battery, premium comfort, crystal clear calls.',
    price: 2200, originalPrice: 2800, images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop'],
    category: 'electronics', seller: mockUsers[6], location: 'Accra Mall, Ghana', condition: 'new',
    rating: 4.9, reviewCount: 112, views: 3789, likes: 198, inStock: true, quantity: 10, createdAt: '2025-04-23', tags: ['sony', 'headphones', 'noise cancelling', 'wireless'],
    specifications: { 'Type': 'Over-ear', 'Battery': '30 hours', 'ANC': 'Yes', 'Connectivity': 'Bluetooth 5.3' }
  },
];
