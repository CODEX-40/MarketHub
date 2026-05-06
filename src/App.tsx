import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProfilePage from './pages/ProfilePage';
import VideoFeedPage from './pages/VideoFeedPage';
import MessagesPage from './pages/MessagesPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SettingsPage from './pages/SettingsPage';
import { DashboardOverview, MyListings, OrderManagement, Analytics, WalletPage } from './pages/dashboard/DashboardPages';
import { AdminDashboard, UserManagement, ContentModeration, FraudDetection } from './pages/admin/AdminPages';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/ads" element={<VideoFeedPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              {/* Dashboard */}
              <Route path="/dashboard" element={<DashboardOverview />} />
              <Route path="/dashboard/listings" element={<MyListings />} />
              <Route path="/dashboard/orders" element={<OrderManagement />} />
              <Route path="/dashboard/analytics" element={<Analytics />} />
              <Route path="/dashboard/wallet" element={<WalletPage />} />
              {/* Admin */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<UserManagement />} />
              <Route path="/admin/moderation" element={<ContentModeration />} />
              <Route path="/admin/fraud" element={<FraudDetection />} />
            </Routes>
            <Footer />
            <BottomNav />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
