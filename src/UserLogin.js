import React, { useState } from 'react';
import { useAuth } from './Authentication';
import omgeesLogo from './components/images/omgeesLogo.png';

function UserLogin() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(email, password);
    
    if (!result.success) {
      setError(result.error);
    }
  };

  const fillDemo = (type) => {
    if (type === 'customer') {
      setEmail('customer@example.com');
      setPassword('password123');
    } else {
      setEmail('admin@example.com');
      setPassword('admin123');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center custom-bg-login">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img src={omgeesLogo} alt="OMGees Logo" width="120" height="120" className="d-inline-block align-text-top navbar-logo me-2"/>
                <p className="text-muted">Welcome, Please sign in to your account</p>
              </div>

              <div className="alert alert-info border-0 mb-4">
                <h6 className="alert-heading fw-bold mb-2">Demo Accounts:</h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small><strong>Customer:</strong> customer@example.com / password123</small>
                  <button 
                    className="btn btn-outline-info btn-sm"
                    onClick={() => fillDemo('customer')}
                  >
                    Fill
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small><strong>Admin:</strong> admin@example.com / admin123</small>
                  <button 
                    className="btn btn-outline-info btn-sm"
                    onClick={() => fillDemo('admin')}
                  >
                    Fill
                  </button>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger border-0 mb-3" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  {error}
                </div>
              )}

              <div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    <i className="bi bi-envelope me-2"></i>Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg border-0 bg-light small"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                    style={{ fontSize: '0.75rem' }} 
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="bi bi-lock me-2"></i>Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg border-0 bg-light small"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                    style={{ fontSize: '0.75rem' }} 
                  />
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary btn-lg w-100 rounded-pill fw-semibold"
                  onClick={handleLogin}
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;