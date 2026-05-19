import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-custom text-center">
      <div className="container py-4">
        <div className="row g-4 justify-content-center align-items-center mb-5">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
              <i className="bi bi-heart-fill fs-3 text-danger"></i>
              <span className="fs-4 fw-bold text-white">Adote Um Amigo</span>
            </div>
            <p className="text-white-50 fs-7 mb-0">
              Conectando corações e patinhas desde 2026. Todos os nossos animais merecem um lar repleto de amor.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="fw-bold text-white mb-3">Links Rápidos</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 text-white-50 mb-0">
              <li><a href="#/" className="text-white-50 text-decoration-none">Início</a></li>
              <li><a href="#dogs-section" className="text-white-50 text-decoration-none">Cachorros Disponíveis</a></li>
              <li><a href="#/" className="text-white-50 text-decoration-none">Sobre a ONG</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="fw-bold text-white mb-3">Siga Nossas Redes</h6>
            <div className="d-flex justify-content-center gap-3 fs-4 text-white-50">
              <a href="#/" className="text-white-50"><i className="bi bi-instagram"></i></a>
              <a href="#/" className="text-white-50"><i className="bi bi-facebook"></i></a>
              <a href="#/" className="text-white-50"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <hr className="border-secondary opacity-25 my-4" />
        <p className="text-white-50 fs-7 mb-0">
          &copy; 2026 Adote Um Amigo. Projeto de Front-End desenvolvido com React e Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
