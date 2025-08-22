// contexts/UserContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  fullName: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (userData: User) => {
    setUserState(userData);
    // Optional: Save to localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem('user');
  };

  // Optional: Load user from localStorage on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUserState(JSON.parse(savedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};