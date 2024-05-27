import React, { useState, useEffect } from 'react';
import {collection, getDocs } from 'firebase/firestore';
import MovieCard from './MovieCards';
import db from './../config/config';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const moviesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMovieList(moviesData);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };

    fetchMovies();
  }, []); 

  return (
    <div className='movies'>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.imageURL}
          direction={movie.director}
          rate={movie.rating}
          desc={movie.description}
        />
      ))}
    </div>
  );
};

export default MovieList;
