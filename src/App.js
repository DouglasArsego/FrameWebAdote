import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import DogList from './components/DogList';
import DogProfileModal from './components/DogProfileModal';
import Footer from './components/Footer';
import dogsData from './data/dogs.json';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Filtros via CSS puro */}
      <input type="radio" id="size-all" name="size-filter" defaultChecked className="d-none" />
      <input type="radio" id="size-pequeno" name="size-filter" className="d-none" />
      <input type="radio" id="size-medio" name="size-filter" className="d-none" />
      <input type="radio" id="size-grande" name="size-filter" className="d-none" />

      <input type="radio" id="gender-all" name="gender-filter" defaultChecked className="d-none" />
      <input type="radio" id="gender-macho" name="gender-filter" className="d-none" />
      <input type="radio" id="gender-femea" name="gender-filter" className="d-none" />

      <input type="radio" id="age-all" name="age-filter" defaultChecked className="d-none" />
      <input type="radio" id="age-filhote" name="age-filter" className="d-none" />
      <input type="radio" id="age-adulto" name="age-filter" className="d-none" />

      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <FilterBar />
        <DogList dogs={dogsData} />
      </main>
      <Footer />

      {/* Renderização de todos os modais de perfil ocultos por padrão */}
      {dogsData.map((dog) => (
        <DogProfileModal key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default App;
