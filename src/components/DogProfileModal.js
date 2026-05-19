import React from 'react';

const DogProfileModal = ({ dog }) => {
  if (!dog) return null;

  return (
    <div className="dog-profile-modal" id={`dog-${dog.id}`} role="dialog" aria-modal="true">
      <a href="#" className="modal-backdrop-link" aria-label="Fechar Modal"></a>
      
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content shadow-lg border-0 overflow-hidden text-white">
          <div className="modal-header border-0 p-4 position-relative">
            <h4 className="modal-title fw-bold d-flex align-items-center gap-2 mb-0">
              <i className="bi bi-heart-pulse-fill fs-3 text-danger animate-pulse"></i> Perfil de {dog.name}
            </h4>
            <a href="#" className="btn-close btn-close-white shadow-none position-absolute top-50 end-0 translate-middle-y me-4" aria-label="Close"></a>
          </div>
          
          <div className="modal-body p-4 p-md-5">
            <div className="row g-4 align-items-center">
              {/* Imagem do cão */}
              <div className="col-12 col-md-5 text-center">
                <div className="rounded-4 overflow-hidden mb-3 shadow-sm dog-profile-img-container">
                  <img src={dog.image} alt={dog.name} className="w-100 h-100 object-fit-cover" />
                </div>
                <h4 className="fw-bold mb-1 text-white">{dog.name}</h4>
                <p className="text-white-50 mb-2">
                  <i className="bi bi-tag-fill text-danger me-1"></i>{dog.breed}
                </p>
                <div className="d-flex justify-content-center gap-2 mb-3">
                  <span className="badge profile-badge px-2 py-1">
                    <i className="bi bi-calendar me-1 text-danger"></i>{dog.age}
                  </span>
                  <span className="badge profile-badge px-2 py-1">
                    <i className="bi bi-rulers me-1 text-danger"></i>Porte {dog.size}
                  </span>
                </div>
              </div>

              {/* Informações detalhadas */}
              <div className="col-12 col-md-7 text-start">
                <h5 className="fw-bold mb-3 d-flex align-items-center gap-2 text-white">
                  <i className="bi bi-file-text-fill text-danger"></i> Sobre o {dog.name}
                </h5>
                <p className="text-white-50 lh-lg mb-4">
                  {dog.description}
                </p>

                <h6 className="fw-bold mb-2 text-white">Temperamento</h6>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {dog.temperament.map((temp, index) => (
                    <span key={index} className="badge bg-danger bg-opacity-25 text-white border border-danger border-opacity-25 px-3 py-2 rounded-pill fs-7">
                      {temp}
                    </span>
                  ))}
                </div>

                <div className="profile-care-box p-4 rounded-4 mb-4">
                  <h6 className="fw-bold mb-3 d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-shield-check text-success fs-5"></i> Saúde e Cuidados
                  </h6>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2">
                        {dog.vaccinated ? (
                          <i className="bi bi-check-circle-fill text-success fs-5"></i>
                        ) : (
                          <i className="bi bi-x-circle-fill text-white-50 fs-5"></i>
                        )}
                        <span className="fs-7 fw-medium text-white">Vacinação em dia</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2">
                        {dog.neutered ? (
                          <i className="bi bi-check-circle-fill text-success fs-5"></i>
                        ) : (
                          <i className="bi bi-x-circle-fill text-white-50 fs-5"></i>
                        )}
                        <span className="fs-7 fw-medium text-white">Castrado(a)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 justify-content-end">
                  <a href="#" className="btn btn-outline-light px-4 py-2 fw-semibold rounded-3 text-decoration-none">
                    Voltar
                  </a>
                  <a
                    href={`https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20em%20adotar%20o%20${dog.name}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom px-5 py-2 fw-bold rounded-3 text-decoration-none d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-whatsapp"></i> Quero Adotar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogProfileModal;
