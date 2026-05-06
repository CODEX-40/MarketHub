import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types';
import { currentUser } from '../data/mockUsers';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  mode: 'buyer' | 'seller';
  setMode: (mode: 'buyer' | 'seller') => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null, isAuthenticated: false, mode: 'buyer',
  setMode: () => {}, login: () => {}, logout: () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(currentUser);
  const [mode, setMode] = useState<'buyer' | 'seller'>('buyer');

  const login = () => setUser(currentUser);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, mode, setMode, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- paired hook for AuthProvider
export const useAuth = () => useContext(AuthContext);
