import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownMenu.css';

const DropdownMenu = ({ label, items = [], trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Manejar mouse hover
  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  // Manejar click
  const handleClick = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      className="dropdown-menu"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="dropdown-button" 
        onClick={handleClick}
      >
        {label}
      </button>
      {isOpen && items.length > 0 && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              {item.icon && <span className="item-icon">{item.icon}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,  // Texto principal del botón
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,  // Texto de cada elemento del menú
      icon: PropTypes.node,  // Icono opcional para cada elemento
    })
  ),  // Valor opcional, si no se pasa, será un array vacío
  trigger: PropTypes.oneOf(['hover', 'click']).isRequired,  // Opción para seleccionar trigger
};

export default DropdownMenu;

