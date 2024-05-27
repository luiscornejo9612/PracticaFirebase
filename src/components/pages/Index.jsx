// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Card'
import '../styles/indexMenu.css';


const Index = () => {
  return (
    <div className='index-container'> 
       <Card img='/src/components/img/peliculas.png' tittle='llista' link="/movies/list"></Card> 
       <Card img='/src/components/img/carrete-de-pelicula.png' tittle='add pelicula' link="/movies/add"></Card> 
    </div>
  );
};

export default Index;