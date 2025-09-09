import React from 'react';
import './App.css';
import { AuthProvider, useAuth } from './Authentication';
import UserLogin from './UserLogin';
import AdminNavbar from './components/inc/AdminNavbar';
import Logs from './components/pages/admin/Logs';
import Reports from './components/pages/admin/Reports';
import Maintenance from './components/pages/admin/Maintenance';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Ingredients from './components/pages/products/Ingredients';
import Tools from './components/pages/products/Tools';
import Packaging from './components/pages/products/Packaging';
import Dashboard from './components/pages/admin/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function AppContent() {
  const { isAuthenticated, isAdmin, currentUser, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="login">
        <UserLogin />
      </div>
    );
  }
  
  return (
    <div className="App">
      {isAdmin ? (
        <div className="admin-section">
          <AdminNavbar user={currentUser} onLogout={logout} />
          <div className="admin-content" style={{ paddingTop: '70px' }}>
            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard user={currentUser} onLogout={logout} />} />
              <Route path="/admin/logs" element={<Logs/>} />
              <Route path="/admin/reports" element={<Reports/>} />
              <Route path="/admin/maintenance" element={<Maintenance/>} />
              {/* Default route for admin - redirects any unmatched route to dashboard */}
              <Route path="/*" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="main-background">
          <Navbar user={currentUser} onLogout={logout} />
          <Routes>
            <Route path="/" element={<Home user={currentUser} onLogout={logout} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/ingredients" element={<Ingredients />} />
            <Route path="/products/tools" element={<Tools />} />
            <Route path="/products/packaging" element={<Packaging />} />
            {/* Default route for regular users - redirects any unmatched route to home */}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          <Contact />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;