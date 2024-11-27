import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SplitButton.css';

const SplitButton = ({ label, onPrimaryAction, options = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePrimaryClick = () => {
    onPrimaryAction();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="split-button">
      {/* Botón principal para la acción predeterminada */}
      <button className="primary-button" onClick={handlePrimaryClick}>
        {label}
      </button>

      {/* Botón para desplegar el menú */}
      <button className="dropdown-toggle" onClick={toggleMenu}>
        &#x25BC; {/* Símbolo de flecha hacia abajo */}
      </button>

      {/* Menú desplegable */}
      {isMenuOpen && options.length > 0 && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li 
              key={index} 
              className="dropdown-item" 
              onClick={option.onClick}
            >
              {option.icon && <span className="item-icon">{option.icon}</span>}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SplitButton.propTypes = {
  label: PropTypes.string.isRequired,  // Etiqueta del botón principal
  onPrimaryAction: PropTypes.func.isRequired,  // Función para la acción principal
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,  // Texto de cada opción del menú
      onClick: PropTypes.func.isRequired,  // Acción de cada opción del menú
      icon: PropTypes.node,  // Icono opcional para cada opción
    })
  ),  // Si no se proporciona, será un array vacío
};

export default SplitButton;

