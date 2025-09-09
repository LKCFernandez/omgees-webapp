import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container py-5">
        
        <div className="row">
          <div className="col-12">
            <div className="bg-white rounded-3 shadow-sm p-4 mb-4 d-flex align-items-center">
              <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-3">
                <i className="bi bi-shield-fill-check text-danger fs-4"></i>
              </div>
              <div>
                <h3 className="mb-1">Welcome, {user.name}!</h3>
                <span className="badge bg-danger">Administrator</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className="card bg-primary text-white border-0 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="mb-1">1,247</h4>
                  <p className="mb-0">Total Users</p>
                </div>
                <i className="bi bi-people fs-2 opacity-75"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-success text-white border-0 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="mb-1">89</h4>
                  <p className="mb-0">Active Orders</p>
                </div>
                <i className="bi bi-bag-check fs-2 opacity-75"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-warning text-white border-0 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="mb-1">$5,432</h4>
                  <p className="mb-0">Today's Revenue</p>
                </div>
                <i className="bi bi-currency-dollar fs-2 opacity-75"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-info text-white border-0 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="mb-1">98%</h4>
                  <p className="mb-0">System Uptime</p>
                </div>
                <i className="bi bi-speedometer2 fs-2 opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
