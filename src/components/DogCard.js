import React from 'react';

const DogCard = ({ dog }) => {
  return (
    <div className="card dog-card h-100">
      <div className="dog-img-container position-relative">
        <img src={dog.image} alt={`Cachorro ${dog.name}`} className="dog-img" />
        <div className="position-absolute top-0 end-0 m-3 badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fs-6 fw-bold">
          <i className="bi bi-gender-ambiguous text-danger me-1"></i> {dog.gender}
        </div>
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="card-title fw-bold text-dark mb-0">{dog.name}</h3>
          <span className="badge badge-custom">{dog.age}</span>
        </div>
        <h6 className="text-muted mb-3"><i className="bi bi-tag-fill me-1 text-danger"></i> {dog.breed}</h6>
        <p className="card-text text-secondary mb-4 flex-grow-1">
          {dog.description}
        </p>
        <div className="d-flex flex-wrap gap-1 mb-4">
          {dog.temperament.map((temp, index) => (
            <span key={index} className="badge bg-light text-secondary border px-2 py-1 fs-7">
              {temp}
            </span>
          ))}
        </div>
        <a
          href={`#dog-${dog.id}`}
          className="btn btn-custom w-100 fw-bold py-3 shadow-sm d-flex justify-content-center align-items-center gap-2 text-decoration-none"
        >
          <i className="bi bi-search fs-5"></i> Ver Perfil do {dog.name}
        </a>
      </div>
    </div>
  );
};

export default DogCard;
