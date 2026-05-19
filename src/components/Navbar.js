import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#/">
          <i className="bi bi-heart-fill me-2 fs-3 text-white"></i>
          <span>Adote Um Amigo</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none text-white fs-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white fw-medium px-3" href="#dogs-section">
                Conheça os Cachorros
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="btn btn-light fw-bold text-danger px-4 rounded-pill shadow-sm" href="#dogs-section">
                <i className="bi bi-box2-heart me-2"></i>Quero Adotar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
