import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/indexMenu.css';

const Welcome = () => {
  const [name, setName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsNameSubmitted(true);
  };

  return (
    <div className="card-welcome">
      <h3>Bienvenido!</h3>
      {isNameSubmitted ? (
        <div>
          <p>Hola {name}</p>
          <Link to="/index">Ver Películas</Link>
        </div>
      ) : (
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Welcome;
