import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section text-center text-white">
      <div className="container py-4 position-relative z-1">
        <div className="d-inline-block mb-3 px-3 py-1 rounded-pill bg-white bg-opacity-25 text-white fw-semibold">
          <i className="bi bi-stars me-2"></i> Adotar é um ato de amor
        </div>
        <h1 className="hero-title text-white mb-3">Encontre Seu Novo Melhor Amigo</h1>
        <p className="hero-subtitle text-white text-opacity-75 mb-5 fs-5">
          Temos 4 amigos peludos muito especiais esperando por um lar amoroso.
          Conheça cada um deles e dê a chance de uma nova vida cheia de carinho!
        </p>
        <a href="#dogs-section" className="btn btn-light btn-lg px-5 py-3 fw-bold text-danger rounded-pill shadow">
          Ver Cachorros Disponíveis <i className="bi bi-arrow-down ms-2"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
