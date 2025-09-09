import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  
  const users = {
    'customer@example.com': {
      password: 'password123',
      type: 'customer',
      name: 'Lowis Ken'
    },
    'admin@example.com': {
      password: 'admin123',
      type: 'admin',
      name: 'Cedric Fornandis'
    }
  };

  const [currentUser, setCurrentUser] = useState(null);

  const authenticateUser = (email, password) => {
    const user = users[email];
    
    if (user && user.password === password) {
      return {
        email: email,
        name: user.name,
        type: user.type
      };
    }
    return null;
  };

  const login = (email, password) => {
    const user = authenticateUser(email, password);
    if (user) {
      setCurrentUser(user);
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password. Please try again.' };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.type === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};