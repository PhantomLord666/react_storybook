import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressButton.css';

const ProgressButton = ({ label, isLoading, onClick }) => {
  return (
    <button 
      className={`progress-button ${isLoading ? 'loading' : ''}`} 
      onClick={onClick} 
      disabled={isLoading} // Deshabilita el botón cuando está cargando
    >
      {isLoading ? <span className="loader"></span> : label}
    </button>
  );
};

ProgressButton.propTypes = {
  label: PropTypes.string.isRequired,   // Texto que aparece en el botón
  isLoading: PropTypes.bool.isRequired, // Estado de carga
  onClick: PropTypes.func.isRequired,   // Función que se ejecuta al hacer clic
};

export default ProgressButton;
