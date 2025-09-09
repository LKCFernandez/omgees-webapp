import React from 'react';
import {Link} from 'react-router';
import omgeesLogo from '../images/omgees.png';

function Navbar({user, onLogout}) {
    return (
            <nav className="navbar navbar-expand-lg navbar-custom shadow mt-3">
                <div className="container-fluid">
                    <img src={omgeesLogo} alt="OMGees Logo" width="30" height="24" className="d-inline-block align-text-top navbar-logo me-2"/>
                    <Link to="/" className="navbar-brand fw-bold">OMGees</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link px-3">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link px-3">About us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle px-3" 
                                    href="/" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/products/ingredients" className="dropdown-item">Ingredients</Link></li>
                                    <li><Link to="/products/tools" className="dropdown-item">Tools</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link to="/products/packaging" className="dropdown-item">Packaging</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex p-2" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="d-flex align-items-center p-2">
                        <span className="me-3 text-white">Welcome, {user.name}!</span>
                            <button className="btn btn-outline-primary btn-sm" onClick={onLogout}>Logout</button>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;