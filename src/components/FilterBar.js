import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar-container container my-4">
      <div className="card border-0 shadow-sm p-4 rounded-4 filter-card">
        <h5 className="fw-bold mb-3 text-dark d-flex align-items-center gap-2">
          <i className="bi bi-funnel-fill text-danger animate-pulse"></i> Filtros de Busca
        </h5>
        
        <div className="row g-3">
          {/* Porte */}
          <div className="col-12 col-md-4">
            <span className="fw-semibold text-secondary d-block mb-2 fs-7">
              <i className="bi bi-rulers me-1 text-muted"></i> Porte
            </span>
            <div className="d-flex flex-wrap gap-2">
              <label htmlFor="size-all" className="filter-label size-all-label">Todos</label>
              <label htmlFor="size-pequeno" className="filter-label size-pequeno-label">Pequeno</label>
              <label htmlFor="size-medio" className="filter-label size-medio-label">Médio</label>
              <label htmlFor="size-grande" className="filter-label size-grande-label">Grande</label>
            </div>
          </div>

          {/* Gênero */}
          <div className="col-12 col-md-4">
            <span className="fw-semibold text-secondary d-block mb-2 fs-7">
              <i className="bi bi-gender-ambiguous me-1 text-muted"></i> Gênero
            </span>
            <div className="d-flex flex-wrap gap-2">
              <label htmlFor="gender-all" className="filter-label gender-all-label">Todos</label>
              <label htmlFor="gender-macho" className="filter-label gender-macho-label">Macho</label>
              <label htmlFor="gender-femea" className="filter-label gender-femea-label">Fêmea</label>
            </div>
          </div>

          {/* Idade */}
          <div className="col-12 col-md-4">
            <span className="fw-semibold text-secondary d-block mb-2 fs-7">
              <i className="bi bi-calendar-event me-1 text-muted"></i> Idade
            </span>
            <div className="d-flex flex-wrap gap-2">
              <label htmlFor="age-all" className="filter-label age-all-label">Todos</label>
              <label htmlFor="age-filhote" className="filter-label age-filhote-label">Filhote</label>
              <label htmlFor="age-adulto" className="filter-label age-adulto-label">Adulto</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
