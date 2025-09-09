import React, { useState } from 'react';

function Packaging() {
  const [products] = useState([
    {
      id: 1,
      name: "[Placeholder Name]",
      price: 1299,
      originalPrice: 1999,
      rating: 4.5,
      reviews: 245,
      image: "",
      sold: 1200,
      count: 300
    },
    {
      id: 2,
      name: "[Placeholder Name]",
      price: 299,
      originalPrice: 599,
      rating: 4.8,
      reviews: 89,
      image: "",
      sold: 567,
      count: 433
    },
    {
      id: 3,
      name: "[Placeholder Name]",
      price: 2499,
      originalPrice: 3999,
      rating: 4.3,
      reviews: 156,
      image: "",
      sold: 890,
      count: 110
    },
    {
      id: 4,
      name: "[Placeholder Name]",
      price: 3499,
      originalPrice: 4999,
      rating: 4.7,
      reviews: 78,
      image: "",
      sold: 445,
      count: 555
    },
    {
      id: 5,
      name: "[Placeholder Name]",
      price: 1199,
      originalPrice: 1899,
      rating: 4.4,
      reviews: 203,
      image: "",
      sold: 789,
      count: 211
    },
    {
      id: 6,
      name: "[Placeholder Name]",
      price: 799,
      originalPrice: 1199,
      rating: 4.2,
      reviews: 123,
      image: "",
      sold: 356,
      count: 144
    }
  ]);

  return (
    <div className="container-fluid py-4 px-4" style={{backgroundColor: '#f8f9fa'}}>
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="mb-3">Packaging</h2>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-muted mb-0">{products.length} products found</p>
            <div className="d-flex gap-2">
              <select className="form-select form-select-sm" style={{width: 'auto'}}>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 shadow-sm product-card">
              {/* Product Image */}
              <div className="position-relative">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{height: '180px', objectFit: 'cover'}}
                />
              </div>

              <div className="card-body p-2">
                {/* Product Name */}
                <h6 className="card-title text-truncate mb-2" style={{fontSize: '0.85rem'}}>
                  {product.name}
                </h6>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-danger fw-bold">₱{product.price.toLocaleString()}</span>
                </div>

                {/* Sold Count */}
                <small className="text-muted d-block mb-2">{product.sold} sold</small>

                {/* Available Count */}
                <small className="text-muted d-block mb-2">{product.count} available</small>

                {/* Action Buttons */}
                <div className="d-grid gap-1">
                  <button className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-shopping-cart me-1"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <button className="btn btn-outline-secondary btn-lg px-5">
            <i className="fas fa-plus-circle me-2"></i>Load More Products
          </button>
        </div>
      </div>

      {/* FontAwesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
      
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
    </div>
  );
}

export default Packaging;
