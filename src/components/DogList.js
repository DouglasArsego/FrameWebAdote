import React from 'react';
import DogCard from './DogCard';

const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const DogList = ({ dogs }) => {
  return (
    <section id="dogs-section" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-extrabold display-5 mb-3 text-dark">Conheça Nossos Amigos de Quatro Patas</h2>
        <p className="lead text-muted max-w-700 mx-auto">
          Cada um dos nossos cachorrinhos tem uma personalidade única e muito amor para oferecer.
          Filtre as opções e clique em "Ver Perfil" para saber mais sobre cada um!
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        {dogs.map((dog) => {
          const isFilhote = dog.age.includes('meses');
          const ageClass = isFilhote ? 'age-filhote' : 'age-adulto';
          const sizeClass = `size-${normalizeString(dog.size)}`;
          const genderClass = `gender-${normalizeString(dog.gender)}`;
          
          return (
            <div 
              key={dog.id} 
              className={`col-12 col-md-6 col-xl-3 d-flex dog-card-container ${sizeClass} ${genderClass} ${ageClass}`}
            >
              <div className="w-100">
                <DogCard dog={dog} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DogList;
