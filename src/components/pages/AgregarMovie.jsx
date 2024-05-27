import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from '../config/config';

const AgregarMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    director: '',
    imageURL: '',
    rating: 1,
    year: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "movies"), movie);
      alert('Película añadida exitosamente');
    } catch (error) {
      console.error("Error al añadir la película:", error);
    }

    setMovie({
      title: '',
      description: '',
      director: '',
      imageURL: '',
      rating: 1,
      year: '',
      duration: ''
    });
  };

  return (
    <div className='form-container'>
      <h2>Agregar Película</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movie.title}
          placeholder='Título'
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={movie.description}
          placeholder='Descripción'
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="director"
          value={movie.director}
          placeholder='Director'
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="imageURL"
          value={movie.imageURL}
          placeholder='URL de la imagen'
          onChange={handleChange}
          required
        />
        <label>Calificación (1-5):</label>
        <input
          type="number"
          name="rating"
          value={movie.rating}
          min="1"
          max="5"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          value={movie.year}
          placeholder='Año'
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="duration"
          value={movie.duration}
          placeholder='Duración (min)'
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Película</button>
      </form>
    </div>
  );
};

export default AgregarMovie;
